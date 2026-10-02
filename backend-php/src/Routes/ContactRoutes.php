<?php

namespace Fitforever\Backend\Routes;

use Fitforever\Backend\Controllers\ContactController;

class ContactRoutes{
    public static function submit(): void{
        $controller=new ContactController();

        if($_SERVER["REQUEST_METHOD"]==="POST"){
            $data=json_decode(
                file_get_contents("php://input"),
                true
            );

            $result=$controller->submit($data ?? []);

            echo json_encode($result);

            return;
        }

        echo json_encode([
            "success"=>false,
            "message"=>"Method not alllowed"
        ]);
    }
}