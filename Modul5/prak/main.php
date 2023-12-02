<?php

header("Content-Type: application/json; charset=UTF-8");

include "app/Routes/FoodsRoutes.php";

use App\Routes\FoodsRoutes;

$method = $_SERVER["REQUEST_METHOD"];
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

$foodsRoute = new FoodsRoutes();
$foodsRoute->handle($method, $path);