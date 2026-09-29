<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dss_results', function (Blueprint $table) {
            $table->id();
            $table->foreignId('recommendation_id')->constrained('dss_recommendation')->onDelete('cascade');
            $table->foreignId('drone_package_id')->constrained('drone_packages')->onDelete('cascade');
            $table->string('rule_score');
            $table->string('marcos_score');
            $table->int('passed_threshold');
            $table->int('rank');
            $table->timestamps('created_at');
            $table->timestamps('updated_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dss_results');
    }
};
