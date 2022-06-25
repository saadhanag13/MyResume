<?php
    $message_sent = false; 
    
    if(isset($_POST['email']) && $_POST['email'] != ''){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
            
            $name = $_POST['name'];
            $email = $_POST['email'];
            $subject = $_POST['subject'];
            $message = $_POST['message'];

            $to = "saadhana.ganesh13@gmail.com";
            $body= "";

            $body .= "From: " .$name. "\r\n";
            $body .= "Email: " .$email. "\r\n";
            $body .= "Message: " .$message. "\r\n";

            //mail($to,$subject,$body);
            $message_sent = true; 

        }
        
    }

    

    //$formcontent=" From: $name \n Message: $message";
    //$recipient = "saadhana.ganesh@gmail.com";
    //$mailheader = "From: $email \r\n";
    //mail($recipient, $formcontent, $mailheader) or die("Error!");
    //echo "Thank You!";
?>