<?php

use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Role::class,1)->create();


     //   DB::table('roles')->insert([
     //       'role' => 'user',
      //      'slug' => 'user'
      //  ]);
    }
}
