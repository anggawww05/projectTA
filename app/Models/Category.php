<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'threshold',
    ];

    // protected $casts = [
    //     'threshold' => 'float',
    // ];

    public function rules()
    {
        return $this->hasMany(Rule::class);
    }
}
