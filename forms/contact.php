<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to =" From: $name \n Message: $message";
$recipient = "saadhana.ganesh13@gmail.com";
$from = "From: $email \r\n";
mail($recipient, $to, $from) or die("Error!");
echo "Thank You!";
?>