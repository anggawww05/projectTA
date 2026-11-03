<?php

namespace App\Services;

use App\Models\Category;
use App\Models\Drone;
use InvalidArgumentException;

class RuleBasedService
{
    public function __construct() {}

    public function calculate(int $categoryId)
    {
        Category::findOrFail($categoryId);

        if (!in_array($categoryId, [1, 2, 3, 4], true)) {
            throw new InvalidArgumentException('Kategori belum memiliki aturan.');
        }

        $alternativedata = Drone::all();

        $results = [];

        foreach ($alternativedata as $data) {
            $score = 0;
            $maxscore = 0;

            switch ($categoryId) {
                case 1: //hobi pemula

                    $maxscore = 10;

                    if ($data->price <= 10000000) {
                        $score += 4;
                    }

                    if ($data->active_track == true) {
                        $score += 3;
                    }

                    if ($data->video_res >= 2.7) {
                        $score += 2;
                    }

                    if ($data->weight <= 300) {
                        $score += 1;
                    }

                    break;

                case 2: //travel

                    $maxscore = 13;

                    if ($data->weight <= 300) {
                        $score += 4;
                    }

                    if ($data->battery_count >= 2) {
                        $score += 4;
                    }

                    if ($data->video_res >= 4) {
                        $score += 3;
                    }

                    if ($data->flight_time >= 30) {
                        $score += 2;
                    }

                    break;

                case 3: //professional

                    $maxscore = 13  ;

                    if ($data->battery_count >= 1) {
                        $score += 4;
                    }

                    if ($data->photo_res >= 4) {
                        $score += 4;
                    }

                    if ($data->picture_profile == true) {
                        $score += 4;
                    }

                    if ($data->flight_range >= 15) {
                        $score += 3;
                    }
                    // if ($data->camera_count >= 1) {
                    //     $score += 4;
                    // }

                    // if ($data->video_res >= 4) {
                    //     $score += 4;
                    // }

                    // if ($data->picture_profile == true) {
                    //     $score += 3;
                    // }

                    // if ($data->flight_range >= 15) {
                    //     $score += 2;
                    // }

                    break;

                case 4: //aksi

                    $maxscore = 10;

                    if ($data->max_speed >= 12) {
                        $score += 6;
                    }

                    if ($data->acro_mode == true) {
                        $score += 3;
                    }

                    // if ($data->mode_360 == true) {
                    //     $score += 2;
                    // }

                    if ($data->weight <= 500) {
                        $score += 1;
                    }

                    break;
            }

            $percentage = $maxscore > 0
                ? ($score / $maxscore) * 100
                : 0;

            $results[] = [
                'drone_id' => $data->id,
                'name' => $data->name,
                'price' => $data->price,
                // 'model' => $data->model,
                // 'package_name' => $data->package_name,
                'score' => $score,
                'max_score' => $maxscore,
                'percentage' => $percentage,
            ];
        }

        return $results;
    }
}
