<?php
if(isset($_POST['submit'])){
  $firstName=$_POST['firstName'];
  $lastName=$_POST['lastName'];
  $mailFrom=$_POST['email'];
  $phone=$_POST['phone'];
  $message=$_POST['message'];
}

$mailTo="mar";
$headers="From: ".$mailFrom;
$txt= "Ai primit un e-mail de la ".$firstName.".\n\n".$phone.".\n\n".$message;


mail($mailTo, $phone, $txt, $headers );
header("Location:index.php?mailsend");


?>