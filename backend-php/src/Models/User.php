<?php

namespace Fitforever\Backend\Models;

use Fitforever\Backend\Config\Database;

use PDO;

class User{
    private PDO $db;

    public function __construct(){
        $database=new Database();
        $this->db = $database->getConnection();
    }


    public function findByEmail(string $email): ?array {
        $sql="SELECT * FROM users WHERE email= :email LIMIT 1 ";

        $stmt =$this->db->prepare($sql);
        $stmt->execute([
            ":email"=>$email
        ]);
         $user= $stmt->fetch();

         return $user ?: null;
    }
    

    public function findByNumber(string $number): ?array
{
    $sql = "
        SELECT *
        FROM users
        WHERE number = :number
        LIMIT 1
    ";

    $stmt = $this->db->prepare($sql);

    $stmt->execute([
        ":number" => $number
    ]);

    $user = $stmt->fetch();

    return $user ?: null;
}




    public function create(
        string $name,
        string $email,
        string $number,
        string $password,
        string $role="member"
    ): array {
         $sql="
          INSERT INTO users
          (name,email,number,password,role)
          VALUES
          (:name, :email, :number, :password, :role)
         ";

         $stmt=$this->db->prepare($sql);

         $stmt->execute([
            ":name" => $name,
            ":email" => $email,
            ":number" => $number,
            ":password" => $password,
            ":role" => $role
         ]);



         return [
            "id"=>$this->db->lastInsertId(),
            "name"=>$name,
            "email"=>$email,
            "number"=>$number,
            "role"=>$role
         ];
    }
}

