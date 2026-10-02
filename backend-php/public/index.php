<?php

// require __DIR__ . "/../vendor/autoload.php";

// $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . "/..");

// $dotenv->load();

// header("Content-Type:application/json");

// echo json_encode([
//     "message"=>"Fitforever API is working"
// ]);






// require __DIR__ . "/../vendor/autoload.php";

// $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . "/..");

// $dotenv->load();

// use Fitforever\Backend\Config\Database;

// header("Content-Type: application/json");

// $database = new Database();

// $database->getConnection();

// echo json_encode([
//     "message" => "Database connected successfully"
// ]);
















require __DIR__ . "/../vendor/autoload.php";

use Fitforever\Backend\Routes\UserRoutes;
use Fitforever\Backend\Routes\ContactRoutes;
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

if ($uri === "/api/user/register") {
    UserRoutes::register();
    exit;
}

if($uri==="/api/user/login"){
    UserRoutes::login();
    exit;
}

if($uri==="/api/contact/submit"){
    ContactRoutes::submit();
    exit;
}

echo json_encode([
    "success" => false,
    "message" => "Route not found"
]);