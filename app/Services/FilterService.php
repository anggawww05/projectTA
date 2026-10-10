<?php

namespace App\Services;

use App\Models\Category;

class FilterService
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        private RuleBasedService $ruleBasedService,
        private MarcosService $marcosService
    ) {}

    public function generate(int $categoryId)
    {
        $category = Category::findOrFail($categoryId);

        $threshold = $category->threshold;

        $ruleResults = $this->ruleBasedService->calculate($categoryId);

        $filteredResults = collect($ruleResults)->filter(function ($result) use ($threshold) {
            return $result['percentage'] >= $threshold;
        })->values()->all();

        return $this->marcosService->calculate($filteredResults);
    }
}
