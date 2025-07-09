<?php
session_start();

// Include the database connection file
include("connect.php");

$name = $_POST['name'];
$USN = $_POST['USN'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
$role = $_POST["role"];

if ($password === $cpassword) {
    // Insert into the database
    $insert = mysqli_query($connect, "INSERT INTO user (name, USN, password, role, status, votes) VALUES('$name', '$USN', '$password', '$role', 0, 0)");
    
    if ($insert) {
        // Success: Set session message and redirect
        $_SESSION['message'] = "Registration successful";
        header("Location: ../../public/electifier.html"); // Correct path
        exit(); // Stop further execution
    } else {
        // Failure: Set session message and redirect
        $_SESSION['message'] = "Error: Could not register";
        header("Location: /min/voting%20system001/public/electifier.html"); // Correct path
        exit(); // Stop further execution
    }
} else {
    // Password mismatch: Set session message and redirect
    $_SESSION['message'] = "Password and confirm password do not match";
    header("Location: /min/voting%20system001/public/electifier.html"); // Correct path
    exit(); // Stop further execution
}

// Close the database connection
mysqli_close($connect);
?>



