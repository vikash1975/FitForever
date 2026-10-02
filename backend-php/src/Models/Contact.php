<?php

namespace Fitforever\Backend\Models;

use Fitforever\Backend\Config\Database;
use PDO;

class Contact
{
    private PDO $db;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConnection();
    }

    public function create(
        string $name,
        string $email,
        string $number,
        string $program,
        string $message
    ): array {

        $sql = "
            INSERT INTO contacts
            (name, email, number, program, message)
            VALUES
            (:name, :email, :number, :program, :message)
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            ":name" => $name,
            ":email" => $email,
            ":number" => $number,
            ":program" => $program,
            ":message" => $message
        ]);

        return [
            "id" => $this->db->lastInsertId(),
            "name" => $name,
            "email" => $email,
            "number" => $number,
            "program" => $program,
            "message" => $message
        ];
    }
}