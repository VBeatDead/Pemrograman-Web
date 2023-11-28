<?php

namespace Controller;

// include "Controller/AbstractController";

use Traits\FormatterTrait;

class ProductController extends AbstractController {
    use FormatterTrait;

    public function __construct() {
        $this->controllerName = "Product Management";
        $this->controllerAction = "View All Products";
    }

    public function getControllerInfo() {
        return [
            "ControllerName" => $this->controllerName,
            "Action" => $this->controllerAction
        ];
    }

    public function processRequest() {
        $dummyData = [
            "Laptop",
            "Smartphone",
            "Headphones",
            "Camera"
        ];

        $response = [
            "controller_info" => $this->getControllerInfo(),
            "products" => $dummyData
        ];

        return $this->formatResponse(200, "Success", $response);
    }
}
