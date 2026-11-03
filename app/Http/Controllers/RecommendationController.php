<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\FilterService;
use App\Models\Category;
use Inertia\Inertia;


class RecommendationController extends Controller
{
    public function index(Request $request, FilterService $filterService)
    {
        return Inertia::render('guest/recommendation', [
            'categories' => Category::select('id', 'name')->get(),
        ]);

    }

    public function result(Request $request, FilterService $filterService)
    {
        $validated = $request->validate([
            'category_id' => 'required|integer|exists:categories,id',
            'max_price' => 'required|numeric|min:1',
        ]);

        $category = Category::findOrFail($validated['category_id']);

        $results = $filterService->generate(
            (int) $validated['category_id'],
            (float) $validated['max_price']
        );

        return Inertia::render('guest/result', [
            'recommendations' => $results,
            'inputInfo' => [
                'category' => $category->name,
                'max_price' => (float) $validated['max_price'],
            ],
        ]);
    }
}
