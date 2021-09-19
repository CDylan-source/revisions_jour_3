$dbHost = 'localhost';
$dbName = 'Europe';
$dbChar = 'utf8';
$dbUser = 'Dylan';
$dbPass = 'Neptune26.';
try {
$pdo = new PDO(
"mysql:host=" . $dbHost . ";dbname=" . $dbName . ";charset=" . $dbChar,
$dbUser,
$dbPass,
[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);
} catch (Exception $ex) {
exit($ex->getMessage());
}