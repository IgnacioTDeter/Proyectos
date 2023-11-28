<?php

$servername = "localhost";
$password = "";
$username = "root";
$dbname = "todolist";

$conn = new mysqli($servername, $username, $password, $dbname);

if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["tituloTarea"])){

    $tituloTarea = $_POST["tituloTarea"];

    $insertData = "INSERT INTO tareas VALUES ('$tituloTarea')";

    $consultaRealizada = $conn -> query($insertData);

    $conn -> close(); 
}

?>