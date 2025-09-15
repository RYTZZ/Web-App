<?php
$servername = "localhost";
$username = "root";   // default XAMPP MySQL user
$password = "";       // default XAMPP MySQL password is empty
$dbname = "kaagapay";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}
echo "✅ Connected successfully to database <br>";

// Test query: Fetch users
$sql = "SELECT id, username, role FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Users found:<br>";
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " | Username: " . $row["username"]. " | Role: " . $row["role"]. "<br>";
    }
} else {
    echo "⚠️ No users found.";
}

$conn->close();
?>
