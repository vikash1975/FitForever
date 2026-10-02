<?php

namespace Fitforever\Backend\Controllers;

use Fitforever\Backend\Models\User;
use Fitforever\Backend\Utils\Auth;

class UserController
{
    private User $userModel;

    public function __construct()
    {
        $this->userModel = new User();
    }



public function register(array $data): array
{
    $name = $data["name"] ?? "";
    $email = $data["email"] ?? "";
    $number = $data["number"] ?? "";
    $password = $data["password"] ?? "";

    if (
        empty($name) ||
        empty($email) ||
        empty($number) ||
        empty($password)
    ) {
        return [
            "success" => false,
            "message" => "All fields are required"
        ];
    }

    $existingUser = $this->userModel->findByEmail($email);

    if ($existingUser) {
        return [
            "success" => false,
            "message" => "Email already registered"
        ];
    }

    $existingUser = $this->userModel->findByNumber($number);

    if ($existingUser) {
        return [
            "success" => false,
            "message" => "Number already registered"
        ];
    }

    $hashedPassword = password_hash(
        $password,
        PASSWORD_DEFAULT
    );

    $user = $this->userModel->create(
        $name,
        $email,
        $number,
        $hashedPassword
    );

    return [
        "success" => true,
        "message" => "Registration Successful",
        "user" => $user
    ];
}

public function login(array $data): array
{
    $email = $data["email"] ?? "";
    $password = $data["password"] ?? "";

    if (empty($email) || empty($password)) {
        return [
            "success" => false,
            "message" => "Email and Password are required"
        ];
    }

    $user = $this->userModel->findByEmail($email);

    if (!$user) {
        return [
            "success" => false,
            "message" => "Invalid email or password"
        ];
    }

    if (!password_verify($password, $user["password"])) {
        return [
            "success" => false,
            "message" => "Invalid email or password"
        ];
    }

    unset($user["password"]);

$token = Auth::generateToken($user);

return [
    "success" => true,
    "message" => "Login Successfully",
    "token" => $token,
    "user" => $user
];
}

}