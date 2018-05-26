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




// WELCOME ROUTES
Route::group(['prefix' => 'welcome'], function () {

	Route::get('/access_denied', 'WelcomeController@access_denied')->name('access_denied');
    Route::get('/notification', 'WelcomeController@notification')->name('notification');
    
});





// ADMIN ROUTES
Route::group(['prefix' => 'admin'], function () {

    Route::get('/all_users', 'AdminController@all_users')->name('all_users');
});








Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
