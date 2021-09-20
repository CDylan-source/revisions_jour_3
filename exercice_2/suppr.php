<?php
require_once('connexion.php');
if (isset($_GET['data'])) {

    $datas = explode("-", $_GET['data']);

    $query = $pdo->prepare('SELECT id_genres FROM genres WHERE genre = :genre');
    $query->bindParam(':genre', $datas[2], PDO::PARAM_STR);
    $query->execute();
    $id_genre = $query->fetch(PDO::FETCH_OBJ);

    $query = $pdo->prepare('SELECT id_signes FROM signes WHERE signes = :signes');
    $query->bindParam(':signes', $datas[3], PDO::PARAM_STR);
    $query->execute();
    $id_signe = $query->fetch(PDO::FETCH_OBJ);

    $query = $pdo->prepare("DELETE FROM utilisateurs WHERE nom = :nom AND prenom = :prenom AND id_genres = :id_genres AND id_signes = :id_signes");
    $query->bindParam(':nom', $datas[0], PDO::PARAM_STR);
    $query->bindParam(':prenom', $datas[1], PDO::PARAM_STR);
    $query->bindParam(':id_genres', $id_genre->id_genres, PDO::PARAM_STR);
    $query->bindParam(':id_signes', $id_signe->id_signes, PDO::PARAM_STR);
    $query->execute();

    echo json_encode(true);
};
