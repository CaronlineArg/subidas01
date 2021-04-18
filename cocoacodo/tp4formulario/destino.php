<?php
error_reporting (E_ALL ^ E_NOTICE); 
$name = $_POST['name'];
$email = $_POST['email'];


echo "<br/> &nbsp; contacto ". $name;
echo "<br/> &nbsp; email ". $email;
?>