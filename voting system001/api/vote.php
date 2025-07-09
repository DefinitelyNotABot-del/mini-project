<?php
session_start();
include('connect.php');

// Get POST data
$votes = $_POST['gvotes'];
$total_votes = $votes + 1;
$gid = $_POST['gid'];
$uid = $_SESSION['userdata']['USN']; // Updated to use session data for user USN

// Update votes for the selected candidate
$update_votes = mysqli_query($connect, "UPDATE user SET votes = '$total_votes' WHERE USN = '$gid'");

// Update voting status for the current user
$update_user_status = mysqli_query($connect, "UPDATE user SET status = 1 WHERE USN = '$uid'");

// Check if both updates are successful
if ($update_votes && $update_user_status) {
    // Fetch updated groups data
    $groups = mysqli_query($connect, "SELECT * FROM user WHERE role = 2");
    $groupsdata = mysqli_fetch_all($groups, MYSQLI_ASSOC);

    // Update session data
    $_SESSION['userdata']['status'] = 1; // Update session to reflect voting status
    $_SESSION['groupsdata'] = $groupsdata;

    // Redirect with success message
    echo '
        <script>
            alert("Voting successful!");
            window.location = "../routes/dashboard.php";
        </script>';
} else {
    // Handle errors
    echo '
        <script>
            alert("Some error occurred. Please try again!");
            window.location = "../routes/dashboard.php";
        </script>';
}
?>
