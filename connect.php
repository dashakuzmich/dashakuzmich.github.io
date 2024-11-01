<?php
$servername = "localhost"; // адрес сервера
$username = "u2789117_test"; // имя пользователя
$password = "pG9eE9aF8gsM1bH2"; // пароль
$dbname = "u2789117_test"; // имя базы данных

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8mb4");
// Проверяем соединение
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}
?>