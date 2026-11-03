<?php

namespace App\Services;

use App\Models\Category;
use App\Models\Drone;

class FilterService
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        private RuleBasedService $ruleBasedService,
        private MarcosService $marcosService
    ) {}

    public function generate(int $categoryId, float $maxPrice): array
    {
        $category = Category::findOrFail($categoryId);

        // $threshold = $category->threshold;

        $ruleResults = $this->ruleBasedService->calculate($categoryId);

        $dronePrices = Drone::whereIn('id', array_column($ruleResults, 'drone_id'))->pluck('price', 'id');

        $filteredResults = collect($ruleResults)
            ->filter(function ($result) use ($category, $maxPrice, $dronePrices) {$price = $dronePrices->get($result['drone_id']);
                return $result['percentage'] >= $category->threshold
                && $price !== null
                && is_numeric($price)
                && (float) $price <= $maxPrice;
            } )
            ->values()
            ->all();

        if (empty($filteredResults)) {
            return [];
        }

        return $this->marcosService->calculate($filteredResults);
    }
}
