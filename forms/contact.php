<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent=" From: $name \n Message: $message";
$recipient = "saadhana.ganesh@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>