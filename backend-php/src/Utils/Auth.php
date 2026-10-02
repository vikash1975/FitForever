<?php

namespace Fitforever\Backend\Utils;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Auth{
    public static function generateToken(array $user):string{
        $payload=[
            "iat"=>time(),
            "exp"=>time() + (7 * 24 * 60 * 60),
            "userId"=>$user["id"],
            "role"=>$user["role"],
            "email"=>$user["email"]
        ];

        return JWT::encode(
            $payload,
            $_ENV["JWT_SECRET"],"HS256"
        );
    }

    public static function verifytoken(string $token): object{
        return JWT::decode(
            $token,
            new Key($_ENV["JWT_SECRET"],"HS256")
        );
    }
}