<?php
if(isset($_POST['submit'])){
  $firstName=htmlspecialchars($_POST['firstName']);
  $lastName=htmlspecialchars($_POST['lastName']);
  $mailFrom=htmlspecialchars($_POST['email']);
  $phone=htmlspecialchars($_POST['phone']);
  $message=htmlspecialchars($_POST['message']);
}

$mailTo="marianbarbieru@gmail.com";
$subject="Solicitare de contact de la ".$firstName." ".$lastName;
$body= "Ai primit un e-mail de la ".$firstName." ".$lastName."\n\n".$phone."\n\n".$message;



mail($mailTo, $phone, $txt, $headers );
header("Location:multumim.html?mailsend");


?>