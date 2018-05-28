<?php

use Illuminate\Database\Seeder;

class TnTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        factory(App\Transaction::class,2)->create();

    }
}
