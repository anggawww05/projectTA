<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('drone_packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('drone_id')->constrained('drones')->onDelete('cascade');
            $table->string('package_name');
            $table->string('price');
            $table->int('battery_count');
            $table->timestamps('created_at');
            $table->timestamps('updated_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('drone_packages');
    }
};
