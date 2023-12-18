<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class FoodCollection extends ResourceCollection
{
    public function toArray(Request $request)
    {
        return FoodResource::collection($this->collection);
    }
}
