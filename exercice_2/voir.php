<?php
require_once('connexion.php');
$query = $pdo->prepare('SELECT nom, prenom, genre, signes FROM utilisateurs NATURAL JOIN genres NATURAL JOIN signes');
$query->execute();
$resp = $query->fetchAll(PDO::FETCH_OBJ);
echo json_encode($resp);