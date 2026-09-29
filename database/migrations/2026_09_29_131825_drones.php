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
            $table->string('brand');
            $table->string('model');
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->int('weight');
            $table->int('photo_res');
            $table->int('video_res');
            $table->int('flight_time');
            $table->int('flight_range');
            $table->int('max_speed');
            $table->int('production_year');
            $table->boolean('active_track');
            $table->boolean('picture_profile');
            $table->boolean('acro_mode');
            $table->boolean('mode_360');
            $table->timestamps('created_at');
            $table->timestamps('updated_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('drones');
    }
};
