<?php

require_once('connexion.php');


$country = $_GET['country'];
$query = $pdo->prepare("SELECT capitale FROM Europe WHERE pays = :pays");
$query->bindParam(':pays', $country, PDO::PARAM_STR);
$query->execute();
$response = $query->fetch(PDO::FETCH_OBJ);
if (isset($_GET['value'])) {
    $value = $_GET['value'];
    if($value == strtoupper($response->capitale)){
        echo json_encode(true);
    }
    else{
        echo json_encode(false);
    }
} else {
    echo json_encode($response);
}
