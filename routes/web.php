<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::inertia('/', 'welcome')->name('home');

Route::get('/', function () {
    return Inertia::render('guest/welcome');
});

Route::get('/showcase', function () {
    return Inertia::render('guest/showcase');
})->name('showcase');

Route::get('/recommendation', function () {
    return Inertia::render('guest/recommendation');
})->name('recommendation');

Route::get('/faq', function () {
    return Inertia::render('guest/faq');
})->name('faq');

Route::get('/recommendation/result', function () {
    return Inertia::render('guest/result');
})->name('result');

Route::get('/recommendation/result/detail-product', function () {
    return Inertia::render('guest/detailproduct');
})->name('detail-product');

