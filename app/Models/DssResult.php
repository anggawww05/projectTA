<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DssResult extends Model
{
    protected $fillable = [
        'recommendation_id',
        'drone_package_id',
        'rule_score',
        'marcos_score',
        'passed_threshold',
        'rank',
    ];

    public function dssrecommendation()
    {
        return $this->belongsTo(DssRecommendation::class);
    }

    public function dronepackage()
    {
        return $this->belongsTo(DronePackage::class);
    }
}
