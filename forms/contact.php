<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "saadhana.ganesh13@gmail.com";
$subject = "contact";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";


/* server { 
  listen 80;
  listen 443 ssl;    
  server_name airbrake.io;    
  location /users/create {
      if ($request_method = POST) {
          return 405 https://airbrake.io/users/create$request_uri;
      }
  }
}
 */

?>