<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DronePackage extends Model
{
    protected $fillable = [
        'drone_id',
        'package_name',
        'price',
        'battery_count',
    ];

    public function drone()
    {
        return $this->belongsTo(Drone::class);
    }

    public function dssresults()
    {
        return $this->hasMany(DssResult ::class);
    }
}
