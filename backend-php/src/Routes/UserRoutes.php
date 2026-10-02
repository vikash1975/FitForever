<?php

namespace Fitforever\Backend\Routes;

use Fitforever\Backend\Controllers\UserController;

class UserRoutes{
    public static function register():void{
        $controller=new UserController();

        if($_SERVER["REQUEST_METHOD"]==="POST"){
            $data=json_decode(
                file_get_contents("php://input"),
                true
            );

            $result=$controller->register($data ?? []);

            echo json_encode($result);

            return;
        }

        echo json_encode([
            "success"=>false,
            "message"=>"Method not allowed"
        ]);
    }



   public static function login():void{
    $controller=new UserController();

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $data=json_decode(
            file_get_contents("php://input"),true
        );

        $result=$controller->login($data ?? []);

        echo json_encode($result);

        return;
    }

    echo json_encode([
        "success"=>false,
        "message"=>"Method not allowed"
    ]);
   }
    


}