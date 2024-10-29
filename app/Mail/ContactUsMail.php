<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactUsMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $messageContent;
    public $subject;

    /**
     * Create a new message instance.
     */
    public function __construct($name, $email, $messageContent, $subject)
    {
        $this->name = $name;
        $this->email = $email;
        $this->messageContent = $messageContent;
        $this->subject = $subject;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->subject($this->subject)
                    ->view('mail.contact-us')->with([
                        'name' => $this->name,
                        'email' => $this->email,
                        'messageContent' => $this->messageContent,
                        'subject' => $this->subject,
                    ]);
    }
}
