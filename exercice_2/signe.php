<?php
require_once('connexion.php');
if (isset($_GET['signe'])) {
    $signe = $_GET['signe'];
    $query = $pdo->prepare("INSERT INTO signes(signes) VALUES(:signe)");
    $query->bindParam(':signe', $signe, PDO::PARAM_STR);
    $query->execute();
    echo json_encode(true);
};
