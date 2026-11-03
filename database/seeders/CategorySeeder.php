<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'id' => 1,
                'name' => 'Hobi Pemula',
                'threshold' => 60.00,
            ],
            [
                'id' => 2,
                'name' => 'Travel',
                'threshold' => 60.00,
            ],
            [
                'id' => 3,
                'name' => 'Professional',
                'threshold' => 60.00,
            ],
            [
                'id' => 4,
                'name' => 'Aksi',
                'threshold' => 60.00,
            ],
        ];

        foreach ($categories as $category) {
            DB::table('categories')->updateOrInsert(
                ['id' => $category['id']],
                [
                    'name' => $category['name'],
                    'threshold' => $category['threshold'],
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }

    }
}
