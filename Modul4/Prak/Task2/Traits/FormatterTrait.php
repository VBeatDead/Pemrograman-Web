<?php

namespace Traits;

trait FormatterTrait {
    public function formatResponse($code, $message, $data = null) {
        return json_encode([
            "code" => $code,
            "message" => $message,
            "data" => $data
        ]);
    }
}