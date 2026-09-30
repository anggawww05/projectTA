<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'threshold',
    ];

    public function rules()
    {
        return $this->hasMany(Rule::class);
    }
}
