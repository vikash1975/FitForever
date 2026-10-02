<?php

namespace Fitforever\Backend\Controllers;

use Fitforever\Backend\Models\Contact;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class ContactController
{
    private Contact $contactModel;

    public function __construct()
    {
        $this->contactModel = new Contact();
    }

    public function submit(array $data): array
    {
        $name = $data["name"] ?? "";
        $email = $data["email"] ?? "";
        $number = $data["number"] ?? "";
        $program = $data["program"] ?? "";
        $message = $data["message"] ?? "";

        if (
            empty($name) ||
            empty($email) ||
            empty($number) ||
            empty($program) ||
            empty($message)
        ) {
            return [
                "success" => false,
                "message" => "All fields are required"
            ];
        }

        // Save enquiry in database
        $contact = $this->contactModel->create(
            $name,
            $email,
            $number,
            $program,
            $message
        );

        // Send email
        try {

            $mail = new PHPMailer(true);

            $mail->isSMTP();
            $mail->Host = $_ENV["EMAIL_HOST"];
            $mail->SMTPAuth = true;
            $mail->Username = $_ENV["EMAIL_USERNAME"];
            $mail->Password = $_ENV["EMAIL_PASSWORD"];
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = $_ENV["EMAIL_PORT"];

            $mail->setFrom(
                $_ENV["EMAIL_FROM"],
                "FitForever"
            );

            $mail->addAddress(
                $_ENV["EMAIL_TO"]
            );

            $mail->Subject = "New FitForever Enquiry - " . $program;

            $mail->isHTML(true);

            $mail->Body = "
                <h2>New FitForever Enquiry</h2>

                <p><strong>Name:</strong> {$name}</p>

                <p><strong>Email:</strong> {$email}</p>

                <p><strong>Number:</strong> {$number}</p>

                <p><strong>Program:</strong> {$program}</p>

                <p><strong>Message:</strong> {$message}</p>
            ";

            $mail->send();

        } catch (Exception $e) {

            return [
                "success" => false,
                "message" => "Enquiry saved but email could not be sent"
            ];
        }

        return [
            "success" => true,
            "message" => "Your enquiry has been submitted successfully",
            "contact" => $contact
        ];
    }
}