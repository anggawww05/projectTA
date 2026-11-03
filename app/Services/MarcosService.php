<?php

namespace App\Services;

use App\Models\Drone;
use InvalidArgumentException;
use RuntimeException;

class MarcosService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    private array $expertWeights = [
        'price' => [
            'weight' => 0.20,
            'type' => 'cost',
        ],
        'weight' => [
            'weight' => 0.10,
            'type' => 'cost',
        ],
        'photo_res' => [
            'weight' => 0.15,
            'type' => 'benefit',
        ],
        'flight_range' => [
            'weight' => 0.15,
            'type' => 'benefit',
        ],
        'max_speed' => [
            'weight' => 0.10,
            'type' => 'benefit',
        ],
        'battery_count' => [
            'weight' => 0.10,
            'type' => 'benefit',
        ],
        'production_year' => [
            'weight' => 0.05,
            'type' => 'benefit',
        ],
        'category_score' => [
            'weight' => 0.15,
            'type' => 'benefit',
        ],
    ];

    public function calculate(array $filteredResults, ?array $customWeights = null): array {

        if (empty($filteredResults)) {
            return [];
        }

        //menentukan bobot
        $criteria = $this->expertWeights;

        if ($customWeights !== null) {
            $criteria = $this->setCustomWeights($criteria, $customWeights);
        }

        $this->validateWeights($criteria);

        // Matriks Keputusan
        $matrix = $this->createDecisionMatrix($filteredResults, $criteria);

        // if(empty($matrix)) {
        //     return [];
        // }

        // Solusi Ideal dan Anti Ideal
        [$ideal, $antiIdeal] = $this->determineIdealSolutions($matrix, $criteria);

        // Normalisasi
        $normalizedMatrix = $this->normalizeMatrix($matrix, $ideal, $criteria);

        //Perkalian Bobot
        $weightedMatrix = $this->weightMatrix($normalizedMatrix, $criteria);

        //Menghitung Si
        $sumValues = $this->calculateSumValues($weightedMatrix);

        //Menghitung Utility
        $results = $this->calculateUtility($filteredResults, $sumValues, $ideal, $antiIdeal, $criteria);

        //Ranking
        usort($results, fn ($a, $b) => $b['marcos_score'] <=> $a['marcos_score'] ?: $a['drone_id'] <=> $b['drone_id']);

        //Nomor Ranking
        foreach ($results as $index => &$result) {
            $result['rank'] = $index + 1;
        }

        unset($result);

        return $results;
    }

    private function setCustomWeights(
        array $criteria,
        array $customWeights
    ): array {
        foreach ($customWeights as $code => $weight) {
            if (!array_key_exists($code, $criteria)) {
                throw new InvalidArgumentException(
                    "Kriteria {$code} tidak dikenal."
                );
            }

            if (!is_numeric($weight)) {
                throw new InvalidArgumentException(
                    "Bobot {$code} harus numerik."
                );
            }

            $criteria[$code]['weight'] = (float) $weight;
        }

        return $criteria;
    }

    /**
     * Validasi bobot dan jenis kriteria.
     */
    private function validateWeights(array $criteria): void
    {
        $total = 0;

        foreach ($criteria as $code => $config) {
            $weight = $config['weight'];

            if (
                !is_numeric($weight)
                || !is_finite((float) $weight)
                || $weight < 0
            ) {
                throw new InvalidArgumentException(
                    "Bobot {$code} tidak valid."
                );
            }

            if (!in_array(
                $config['type'],
                ['benefit', 'cost'],
                true
            )) {
                throw new InvalidArgumentException(
                    "Tipe kriteria {$code} tidak valid."
                );
            }

            $total += (float) $weight;
        }

        if (abs($total - 1.0) > 0.000001) {
            throw new InvalidArgumentException(
                "Total bobot harus 1. Total saat ini: {$total}"
            );
        }
    }

    /**
     * Membentuk matriks keputusan berdasarkan
     * drone yang lolos FilterService.
     */
    private function createDecisionMatrix(
        array $filteredResults,
        array $criteria
    ): array {
        $droneIds = array_column(
            $filteredResults,
            'drone_id'
        );

        $drones = Drone::whereIn('id', $droneIds)
            ->get()
            ->keyBy('id');

        $matrix = [];

        foreach ($filteredResults as $result) {
            $droneId = $result['drone_id'];

            $drone = $drones->get($droneId);

            if (!$drone) {
                throw new RuntimeException(
                    "Drone ID {$droneId} tidak ditemukan."
                );
            }

            $row = [];

            foreach ($criteria as $code => $config) {
                // Skor kategori berasal dari Rule-Based
                if ($code === 'category_score') {
                    $value = $result['percentage'] ?? null;
                } else {
                    $value = $drone->{$code};
                }

                if (
                    $value === null
                    || !is_numeric($value)
                    || !is_finite((float) $value)
                ) {
                    throw new RuntimeException(
                        "Nilai {$code} pada drone ID "
                        . "{$droneId} tidak valid."
                    );
                }

                $value = (float) $value;

                // Semua kriteria harus bernilai positif
                // untuk normalisasi MARCOS yang digunakan.
                if ($value <= 0) {
                    throw new RuntimeException(
                        "Nilai {$code} pada drone ID "
                        . "{$droneId} harus lebih dari 0."
                    );
                }

                $row[$code] = $value;
            }

            $matrix[] = $row;
        }

        return $matrix;
    }

    /**
     * Menentukan AI (ideal) dan AAI (anti-ideal).
     */
    private function determineIdealSolutions(
        array $matrix,
        array $criteria
    ): array {
        $ideal = [];
        $antiIdeal = [];

        foreach ($criteria as $code => $config) {
            $values = array_column($matrix, $code);

            if ($config['type'] === 'benefit') {
                $ideal[$code] = max($values);
                $antiIdeal[$code] = min($values);
            } else {
                $ideal[$code] = min($values);
                $antiIdeal[$code] = max($values);
            }
        }

        return [$ideal, $antiIdeal];
    }

    /**
     * Normalisasi menggunakan nilai ideal.
     *
     * Benefit: x_ij / AI_j
     * Cost: AI_j / x_ij
     */
    private function normalizeMatrix(
        array $matrix,
        array $ideal,
        array $criteria
    ): array {
        $normalized = [];

        foreach ($matrix as $row) {
            $normalizedRow = [];

            foreach ($criteria as $code => $config) {
                $value = $row[$code];

                if ($config['type'] === 'benefit') {
                    $normalizedRow[$code] =
                        $value / $ideal[$code];
                } else {
                    $normalizedRow[$code] =
                        $ideal[$code] / $value;
                }
            }

            $normalized[] = $normalizedRow;
        }

        return $normalized;
    }

    /**
     * Menghitung matriks tertimbang.
     */
    private function weightMatrix(
        array $normalizedMatrix,
        array $criteria
    ): array {
        $weighted = [];

        foreach ($normalizedMatrix as $row) {
            $weightedRow = [];

            foreach ($criteria as $code => $config) {
                $weightedRow[$code] =
                    $row[$code] * $config['weight'];
            }

            $weighted[] = $weightedRow;
        }

        return $weighted;
    }

    /**
     * Menghitung S_i setiap alternatif.
     */
    private function calculateSumValues(
        array $weightedMatrix
    ): array {
        return array_map(
            fn ($row) => array_sum($row),
            $weightedMatrix
        );
    }

    /**
     * Menghitung total nilai tertimbang
     * untuk solusi ideal atau anti-ideal.
     */
    private function calculateReferenceSum(
        array $reference,
        array $ideal,
        array $criteria
    ): float {
        $sum = 0;

        foreach ($criteria as $code => $config) {
            if ($config['type'] === 'benefit') {
                $normalized =
                    $reference[$code] / $ideal[$code];
            } else {
                $normalized =
                    $ideal[$code] / $reference[$code];
            }

            $sum += $normalized * $config['weight'];
        }

        return $sum;
    }

    /**
     * Menghitung fungsi utilitas MARCOS.
     */
    private function calculateUtility(
        array $filteredResults,
        array $sumValues,
        array $ideal,
        array $antiIdeal,
        array $criteria
    ): array {
        $idealSum = $this->calculateReferenceSum(
            $ideal,
            $ideal,
            $criteria
        );

        $antiIdealSum = $this->calculateReferenceSum(
            $antiIdeal,
            $ideal,
            $criteria
        );

        if ($idealSum <= 0 || $antiIdealSum <= 0) {
            throw new RuntimeException(
                'Nilai referensi MARCOS tidak valid.'
            );
        }

        $results = [];

        foreach ($filteredResults as $index => $result) {
            $sum = $sumValues[$index];

            // Utility degree
            $kMinus = $sum / $antiIdealSum;
            $kPlus = $sum / $idealSum;

            $kTotal = $kPlus + $kMinus;

            if ($kTotal <= 0) {
                throw new RuntimeException(
                    'Nilai utility degree tidak valid.'
                );
            }

            // Fungsi utilitas terhadap AAI dan AI
            $fMinus = $kPlus / $kTotal;
            $fPlus = $kMinus / $kTotal;

            // Fungsi utilitas akhir MARCOS
            $denominator = 1
                + ((1 - $fPlus) / $fPlus)
                + ((1 - $fMinus) / $fMinus);

            $utility = $kTotal / $denominator;

            $results[] = array_merge($result, [
                'sum_value' => $sum,
                'k_minus' => $kMinus,
                'k_plus' => $kPlus,
                'marcos_score' => $utility,
            ]);
        }

        return $results;
    }

};
