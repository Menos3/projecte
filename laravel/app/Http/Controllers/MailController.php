<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function test(Request $request)
   {
       try {
           $mail = new TestMail([
               'name' => 'Anonymous',
               'body' => 'Testing mail',
               'url'  => '/'
           ]);
           Mail::to('example@example.com')->send($mail);
           echo '<h1>Mail send successfully</h1>';
       } catch (\Exception $e) {
           echo '<pre>Error - ' . $e .'</pre>';
       }
    }
}
?>
