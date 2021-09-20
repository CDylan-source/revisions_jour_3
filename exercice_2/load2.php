<?php
require_once('connexion.php');
$query = $pdo->prepare("SELECT genre FROM genres WHERE genre != 'homme' && genre != 'femme'");
$query->execute();
$resp = $query->fetchAll(PDO::FETCH_OBJ);
echo json_encode($resp);
