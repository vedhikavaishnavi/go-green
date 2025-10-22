<?php
$firstName = $POST['fname'];
$lastName  = $POST['lname'];
$phone     = $POST['phone'];
$birthday  = $POST['Birthday'];
$email     = $POST['email'];

echo "<h2>Successfully created your profile, " . htmlspecialchars($firstName) . " " . htmlspecialchars($lastName) . "!</h2>";

echo "<p>Phone Number: " . htmlspecialchars($phone) . "<br>";
echo "Birthday: " . htmlspecialchars($birthday) . "<br>";
echo "Email: " . htmlspecialchars($email) . "</p>";
?>

