<?php

header("Content-Type: application/json");
include('connect.php'); // Подключаем файл с настройками БД

// Получаем данные из POST-запроса
$fio = $_POST['fio'];
$email = $_POST['email'];
$tel = $_POST['tel'];

// SQL-запрос для вставки данных
$sql = "INSERT INTO users (fio, email, tel) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $fio, $email, $tel);

if ($stmt->execute()) {
    echo json_encode(["message" => "Данные успешно добавлены"]);
} else {
    echo json_encode(["error" => "Ошибка при добавлении данных: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>