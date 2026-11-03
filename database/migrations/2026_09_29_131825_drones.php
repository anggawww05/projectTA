<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('drones', function (Blueprint $table) {
            $table->id();
            // $table->string('brand');
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->integer('weight');
            $table->integer('photo_res');
            // $table->integer('video_res');
            // $table->integer('flight_time');
            $table->integer('flight_range');
            $table->integer('max_speed');
            $table->integer('production_year');
            $table->boolean('active_track');
            $table->boolean('picture_profile');
            $table->boolean('manual_mode');
            // $table->boolean('mode_360');
            $table->timestamps();
            // $table->string('package_name');
            $table->string('price');
            $table->integer('battery_count');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('drones');
    }
};
