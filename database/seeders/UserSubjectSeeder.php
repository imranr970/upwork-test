<?php

namespace Database\Seeders;

use App\Models\UserSubject;
use Illuminate\Database\Seeder;

class UserSubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserSubject::factory(10)->create();
    }
}
