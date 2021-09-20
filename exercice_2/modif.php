<?php
require_once('connexion.php');
if(isset($_GET['data']) && isset($_GET['name']) && isset($_GET['genre']) && isset($_GET['firstname']) && isset($_GET['signe'])){

    $datas = explode("-", $_GET['data']);
    $nom = $_GET['name'];
    $prenom = $_GET['firstname'];
    $genre = $_GET['genre'];
    $signe = $_GET['signe'];

    $query = $pdo->prepare('SELECT id_genres FROM genres WHERE genre = :genre');
    $query->bindParam(':genre', $genre, PDO::PARAM_STR);
    $query->execute();
    $id_genre = $query->fetch(PDO::FETCH_OBJ);

    $query = $pdo->prepare('SELECT id_signes FROM signes WHERE signes = :signes');
    $query->bindParam(':signes', $signe, PDO::PARAM_STR);
    $query->execute();
    $id_signe = $query->fetch(PDO::FETCH_OBJ);


    $query = $pdo->prepare("UPDATE utilisateurs SET nom = :nom, prenom = :prenom, id_genres = :id_genres, id_signes = :id_signes WHERE nom = :oldname AND prenom = :oldfirstname");
    $query->bindParam(':nom', $nom, PDO::PARAM_STR);
    $query->bindParam(':prenom', $prenom, PDO::PARAM_STR);
    $query->bindParam(':id_genres', $id_genre->id_genres, PDO::PARAM_STR);
    $query->bindParam(':id_signes', $id_signe->id_signes, PDO::PARAM_STR);
    $query->bindParam(':oldname', $datas[0], PDO::PARAM_STR);
    $query->bindParam(':oldfirstname', $datas[1], PDO::PARAM_STR);
    $query->execute();

    echo json_encode(true);
};