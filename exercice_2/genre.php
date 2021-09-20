<?php
require_once('connexion.php');
if(isset($_GET['genre'])){
    $genre = $_GET['genre'];
    $query = $pdo->prepare("INSERT INTO genres(genre) VALUES(:genre)");
    $query->bindParam(':genre', $genre, PDO::PARAM_STR);
    $query->execute();
    echo json_encode(true);
};