<?php 

$dbc = mysqli_connect('localhost', 'u2789117_default', 'BSireZ4K4qg8HD7g', 'u2789117_default');
$data = json_decode(file_get_contents{'php://input'}, true);
$fio = $data['fio'];
$email = $data['email'];
$tel - $data['tel'];

$query = "INSERT INTO u2789117_bd (fio, email, tel)
VALUES ('$fio', '$email', '$tel')";

$result = mysqli_query($dbc, $query);

mysqli_close($dbc);