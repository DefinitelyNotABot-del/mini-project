<?php
session_start();


$_SESSION = [];


session_destroy();


header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); 
header("Location: ../../public/home.html");
exit;
?>
