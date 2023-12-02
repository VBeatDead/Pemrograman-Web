<?php

namespace App\Controller;

include "app/Traits/ApiResponseFormatter.php";
include "app/Models/Foods.php";

use App\Models\Foods;
use App\Traits\ApiResponseFormatter;

class FoodsController {
    use ApiResponseFormatter;

    // public function index() {
    //     $foodsModel = new Foods;
    //     $response = $foodsModel->findAllWithCategories();
    //     return $this->apiResponse(200, "success", $response);
    // }

    public function index() {
        $foodsModel = new Foods;
        $response = $foodsModel->findAll();
        return $this->apiResponse(200, "success", $response);
    }

    public function getById($id) {
        $foodsModel = new Foods();
        $response = $foodsModel->findById($id);
        return $this->apiResponse(200, "success", $response);
    }

    public function insert() {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }

        $foodsModel = new Foods();
        $response = $foodsModel->create([
            "id" => $inputData["id"],
            "name" => $inputData["name"],
            "category" => $inputData["category"],
            "price" => $inputData["price"]
        ]);
        return $this->apiResponse(200, "success", $response);
    }

    public function update($id) {
        $jsonInput = file_get_contents("php://input");
        $inputData = json_decode($jsonInput, true);
        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }

        $foodsModel = new Foods();
        $response = $foodsModel->update([
            "name" => $inputData["name"]
        ], $id);
        return $this->apiResponse(200, "success", $response);
    }

    public function delete($id) {
        $foodsModel = new Foods();
        $response = $foodsModel->destroy($id);
        return $this->apiResponse(200, "success", $response);
    }
}