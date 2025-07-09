<?php
session_start();

// Include the database connection file
include("connect.php");

// Check if the form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data from POST
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $issue = $_POST['issue'];

    // Check if all fields are filled
    if (!empty($email) && !empty($subject) && !empty($issue)) {
        // Prepare the SQL query to insert data into the 'comp' table
        $stmt = $connect->prepare("INSERT INTO comp (email, subject, issue) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $email, $subject, $issue);

        // Execute the query and check for success
        if ($stmt->execute()) {
            // Redirect on success
            $_SESSION['message'] = "Registration successful";
            header("Location: ../../public/complain.html"); // Correct path
            exit(); // Stop further script execution
        } else {
            // Redirect on failure
            $_SESSION['message'] = "Error: Could not register";
            header("Location: /min/voting%20system001/public/electifier.html"); // Correct path
            exit(); // Stop further script execution
        }

        // Close the statement
        $stmt->close();
    } else {
        // Redirect if fields are missing
        $_SESSION['message'] = "All fields are required";
        header("Location: ../../public/complain.html"); // Redirect to the same page
        exit(); // Stop further script execution
    }
}

// Close the database connection
$connect->close();
?>
