<?php
$file='https://restcountries.eu/rest/v2/region/europe';
$data = file_get_contents($file);
$obj = json_decode($data);

require("connexion.php");

for($i = 0; $i < count($obj);$i++){
    $query = $pdo->prepare('INSERT INTO Europe (ville, capitale) VALUES (?,?)');
    $query->execute([$obj[$i]->name, $obj[$i]->capital]);
}
echo "DONE\n";