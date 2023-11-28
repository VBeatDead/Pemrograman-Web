<?php

include "Controller/AbstractController.php";
include "Traits/FormatterTrait.php";
include "Controller/ProductController.php";

use Controller\ProductController;

$productController = new ProductController;

echo $productController->processRequest();