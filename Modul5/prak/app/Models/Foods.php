<?php

namespace app\Models;

include "app/Config/DatabaseConfig.php";

use app\Config\DatabaseConfig;
use mysqli;

class Foods extends DatabaseConfig {
    public $conn;

    public function __construct() {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function findAllWithCategories() {
            $sql = "SELECT foods.*, categories.diskon 
                    FROM foods
                    INNER JOIN categories ON foods.id = categories.id";
            $result = $this->conn->query($sql);
            $this->conn->close();
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        }

    public function findAll() {
        $sql = "SELECT * FROM foods";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function findById($id) {
        $sql = "SELECT * FROM foods WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function create($data) {
        $id = $data["id"];
        $foodsName = $data["name"];
        $category = $data["category"];
        $price = $data["price"];
    
        $query = "INSERT INTO foods (id, name, category, price) VALUES (?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("issd", $id, $foodsName, $category, $price);
        $stmt->execute();
        $this->conn->close();
    }    

    public function update($data, $id) {
        $foodsName = $data["name"];

        $query = "UPDATE foods SET name = ? WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("si", $foodsName, $id);
        $stmt->execute();
        $this->conn->close();
    }

    public function destroy($id) {
        $query = "DELETE FROM foods WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $this->conn->close();
    }
}