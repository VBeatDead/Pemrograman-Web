<?php

namespace Controller;

abstract class AbstractController {
    protected $controllerName;
    protected $controllerAction;

    abstract public function getControllerInfo();
    abstract public function processRequest();
}
