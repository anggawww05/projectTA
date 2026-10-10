<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Drone extends Model
{
    protected $fillable = [
        'brand',
        'model',
        'description',
        'image',
        'weight',
        'photo_res',
        'video_res',
        'flight_time',
        'flight_range',
        'max_speed',
        'production_year',
        'active_track',
        'picture_profile',
        'acro_mode',
        'mode_360',
        'package_name',
        'price',
        'battery_count',
    ];

    public function dssresults()
    {
        return $this->hasMany(DssResult::class);
    }
}
