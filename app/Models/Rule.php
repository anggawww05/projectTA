<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    protected $fillable = [
        'category_id',
        'attribute',
        'operator',
        'value',
        'score',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
