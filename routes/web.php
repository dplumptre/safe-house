<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });




#Welcome PAGE
#PAGES IN THE GUI
#FRONT PAGES

Route::get('/', 'WelcomeController@index')->name('index');
Route::prefix('welcome')->group(function () {



});







Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
