<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$email = $_POST['email'];
$pwd = password_hash($_POST['password'], PASSWORD_BCRYPT);

$servername = 'localhost';
$username = 'root';
$password = 'zeke123!';
$dbname = 'accounts';
$port = 3310; // Change to the port that you are using for MySQL in XAMPP

try {
    $conn = new mysqli($servername, $username, $password, $dbname, $port);
    $conn->set_charset("utf8mb4");
} catch (mysqli_sql_exception $e) {
    die("Connection failed: " . $e->getMessage());
}

try {
    $stmt = $conn->prepare("INSERT INTO registration (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $pwd);
    $stmt->execute();

    header("Location: login.html");
    exit();

    $stmt->close();
    $conn->close();
} catch (mysqli_sql_exception $e) {
    die("Error: " . $e->getMessage());
}
?>
