<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::inertia('/', 'welcome')->name('home');

Route::get('/', function () {
    return Inertia::render('guest/welcome');
});
