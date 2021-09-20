<?php
require_once('connexion.php');
if(isset($_GET['nom']) && isset($_GET['prenom']) && isset($_GET['genre']) && isset($_GET['signe'])){

    $nom = $_GET['nom'];
    $prenom = $_GET['prenom'];
    $genre = $_GET['genre'];
    $signe = $_GET['signe'];

    $query = $pdo->prepare('SELECT id_genres FROM genres WHERE genre = :genre');
    $query->bindParam(':genre', $genre, PDO::PARAM_STR);
    $query->execute();
    $id_genre = $query->fetch(PDO::FETCH_OBJ);

    $query = $pdo->prepare('SELECT id_signes FROM signes WHERE signes = :signe');
    $query->bindParam(':signe', $signe, PDO::PARAM_STR);
    $query->execute();
    $id_signe = $query->fetch(PDO::FETCH_OBJ);


    $query = $pdo->prepare('INSERT INTO utilisateurs VALUES(?,?,?,?)');
    $query->execute([$nom, $prenom, $id_genre->id_genres, $id_signe->id_signes]);
    echo json_encode(true);
};


