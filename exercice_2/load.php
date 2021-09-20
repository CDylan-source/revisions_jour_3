<?php
require_once('connexion.php');
$query = $pdo->prepare('SELECT signes FROM signes');
$query->execute();
$resp = $query->fetchAll(PDO::FETCH_OBJ);
echo json_encode($resp);
