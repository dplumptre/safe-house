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

Route::get('welcome/test', function () {
    return view('welcome/test');
});


Route::group(['prefix' => 'welcome'], function () {

	Route::get('/access_denied', 'WelcomeController@access_denied')->name('access_denied');
    Route::get('/notification', 'WelcomeController@notification')->name('notification');
    
});





// ADMIN ROUTES
Route::group(['prefix' => 'admin'], function () {

    Route::get('/all_users', 'AdminController@all_users')->name('all_users');
    Route::get('/transactions', 'AdminController@transactions')->name('transactions');
    Route::get('/transaction_history/{id}', 'AdminController@transaction_history')->name('transaction_history');


    Route::get('/transfer', 'AdminController@transfer')->name('transfer');
    Route::post('/verify_account', 'AdminController@verify_account')->name('verify_account');
	Route::post('/store_transfer', 'AdminController@store_transfer');


    Route::get('/credit_user/{id}', 'AdminController@credit_user')->name('credit_user');
	Route::post('/store_credit', 'AdminController@store_credit');

    Route::get('/debit_user/{id}', 'AdminController@debit_user')->name('debit_user');
	Route::post('/store_debit', 'AdminController@store_debit');

 //    Route::post('/search', 'AdminController@search')->name('search');    
 //    Route::get('/debit_user', 'AdminController@debit_user')->name('debit_user');
	// Route::post('/debit_account', 'AdminController@debit_account');

    Route::patch('/verify/{account_status}', 'AdminController@verify')->name('verify');
});








Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::group(['prefix' => 'home'], function () {

    Route::get('accountsummary', 'HomeController@ac')->name('ac');
    Route::get('transfer', 'HomeController@transfer')->name('home.transfer');
    Route::get('profile', 'HomeController@profile')->name('home.profile');
    Route::get('verify_account', 'HomeController@v_a')->name('home.v_a');
    Route::post('verify_account', 'HomeController@post_v_a')->name('home.post_v_a');
    Route::post('transfer', 'HomeController@posttransfer')->name('home.posttransfer');
    //Route::get('', 'HomeController@ac')->name('ac');
});