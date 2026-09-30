<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('criteria', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('attribute');
            $table->string('type');
            $table->integer('weight');
            $table->timestamps('created_at');
            $table->timestamps('updated_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('criteria');
    }
};
