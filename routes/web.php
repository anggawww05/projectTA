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

