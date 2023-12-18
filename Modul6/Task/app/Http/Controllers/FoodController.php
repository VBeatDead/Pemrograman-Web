<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFoodRequest;
use App\Http\Requests\UpdateFoodRequest;
use App\Http\Resources\FoodCollection;
use App\Http\Resources\FoodResource;
use App\Models\Food;
use Exception;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    public function index()
    {
        try {
            $queryData = Food::all();
            $formattedDatas = new FoodCollection($queryData);
            return response()->json([
                "message" => "success",
                "data" => $formattedDatas
            ], 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }
    public function store(StoreFoodRequest $request)
    {
        $validatedRequest = $request->validated();
        try {
            $queryData = Food::create($validatedRequest);
            $formattedDatas = new FoodResource($queryData);
            return response()->json([
                "message" => "success",
                "data" => $formattedDatas
            ], 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }
    public function show(string $id)
    {
        try {
            $queryData = Food::findOrFail($id);
            $formattedDatas = new FoodResource($queryData);
            return response()->json([
                "message" => "success",
                "data" => $formattedDatas
            ], 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }
    public function update(UpdateFoodRequest $request, string $id)
    {
        $validatedRequest = $request->validated();
        try {
            $queryData = Food::findOrFail($id);
            $queryData->update($validatedRequest);
            $queryData->save();
            $formattedDatas = new FoodResource($queryData);
            return response()->json([
                "message" => "success",
                "data" => $formattedDatas
            ], 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }
    public function destroy(string $id)
    {
        try {
            $queryData = Food::findOrFail($id);
            $queryData->delete();
            $formattedDatas = new FoodResource($queryData);
            return response()->json([
                "message" => "success",
                "data" => $formattedDatas
            ], 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }
}
