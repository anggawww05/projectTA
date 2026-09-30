<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Criteria extends Model
{
    protected $fillable = [
        'name',
        'attribute',
        'type',
        'weight',
    ];

    public function packages()
    {
        return $this->hasMany(Rule::class);
    }
}
