<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function contact(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required',
        ]);

        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');
        $subject = $request->input('subject');

        // Send the email
        Mail::to('contact@kasukutech.com')->cc($email)->queue(new ContactUsMail($name, $email, $message, $subject));

        return back()->with('success', 'Your message has been sent!');
    }
}
