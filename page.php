<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $password = $_POST["password"];
    if (empty($email) || empty($phone) || empty($password)) {
        header("Location: login.html");
        exit;
    }
    $conn = mysqli_connect("localhost", "username", "password", "database");


    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $sql = "INSERT INTO users (email, phone, password) VALUES ('$email', '$phone', '$password')";

    if (mysqli_query($conn, $sql)) {
        header("Location: home.html");
        exit;
    } else {
        header("Location: register.html");
        exit;
    }
    mysqli_close($conn);

}
?>
