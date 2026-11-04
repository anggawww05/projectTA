<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RecommendationController;
use App\Http\Controllers\ShowcaseController;

// Route::inertia('/', 'welcome')->name('home');

Route::get('/', function () {
    return Inertia::render('guest/welcome');
});

Route::get('/showcase', [
    ShowcaseController::class, 'index'
])->name('showcase');

Route::get('/recommendation', [
    RecommendationController::class, 'index'
])->name('index');

Route::get('/faq', function () {
    return Inertia::render('guest/faq');
})->name('faq');

// Route::get('/recommendation/result', function () {
//     return Inertia::render('guest/result');
// })->name('result');

Route::get('/recommendation/result', [
    RecommendationController::class, 'result'
])->name('result');

Route::get('/recommendation/result/detail-product', function () {
    return Inertia::render('guest/detailproduct');
})->name('detail-product');

