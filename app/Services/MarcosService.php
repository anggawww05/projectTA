<?php

namespace App\Services;

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
        'video_res' => [
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

        $criteria = $this->expertWeights;

        if ($customWeights) {
            $criteria = $this->setCustomWeights($criteria, $customWeights);
        }

        $this->validateWeights($criteria);

        // Matriks Keputusan
        $matrix = $this->createDecisionMatrix($filteredResults);

        if(empty($matrix)) {
            return [];
        }

        // Solusi Ideal dan Anti Ideal
        [$ideal, $antiIdeal] = $this->determineIdealSolutions($matrix, $criteria);

        // Normalisasi
        $normalizedMatrix = $this->normalizedMatrix($matrix, $ideal, $criteria);

        //Pembobotan
        $weightedMatrix = $this->weightedMatrix($normalizedMatrix, $criteria);

        //Menghitung Si
        $sumValues = $thiscakcukatedSumValues($weightedMatrix)

        //Menghitung Utility
        $results = $this->calculateUtility($filteredRsults, $sumValues, $ideal, $antiIdeal, $criteria)

        //Ranking
        usort($results, fn ($a, $b) => $b['marcos_score'] <=> $a['marcos_score']);

        //Nomor Ranking
        foreach ($results as $index => &$result) {
            $result['rank'] = $index + 1;
        }

        unset($result);

        return $results;
    }
};
