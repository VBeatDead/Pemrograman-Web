<?php

namespace App\Routes;

include "app/Controller/FoodsController.php";

use App\Controller\FoodsController;

class FoodsRoutes {
    public function handle($method, $path) {
        if ($method === "GET" && $path === "/api/food") {
            $controller = new FoodsController();
            echo $controller->index();
        }
    
        if ($method === "GET" && strpos($path, "/api/food/") === 0) {
            $pathParts = explode("/", $path);
            $id = $pathParts[count($pathParts) - 1];
            $controller = new FoodsController();
            echo $controller->getById($id);
        }
    
        if ($method === "POST" && $path === "/api/food") {
            $controller = new FoodsController();
            echo $controller->insert();
        }

        if ($method === "PUT" && strpos($path, "/api/food/") === 0) {
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];
            $controller = new FoodsController;
            echo $controller->update($id);
        }

        if ($method === "DELETE" && strpos($path, "/api/food/") === 0) {
            $pathParts = explode("/", $path);
            $id = $pathParts[count($pathParts) - 1];
            $controller = new FoodsController();
            echo $controller->delete($id);
        }
    }
}