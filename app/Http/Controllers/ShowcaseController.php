<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Models\Drone;
use Inertia\Inertia;

class ShowcaseController extends Controller
{
    public function index()
    {
        return Inertia::render('guest/showcase', [
            'drones' => Drone::all(),
        ]);
    }
}
