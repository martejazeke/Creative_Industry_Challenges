<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$email = $_POST['email'];
$pwd = $_POST['password'];

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
    $stmt = $conn->prepare("SELECT password FROM registration WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($hashed_password);
    $stmt->fetch(); 

    if (password_verify($pwd, $hashed_password)) {
        header("Location: homepage.html");
        exit();
    } else {
        echo "Invalid email or password.";
    }

    $stmt->close();
    $conn->close();
} catch (mysqli_sql_exception $e) {
    die("Error: " . $e->getMessage());
}
?>
