<?php
$connect = mysqli_connect("localhost","root","","votesystem1") or die("connection failed");

if($connect){
    echo "connected";
}
else{
    echo "not connected";
}

?>