<?php
App::uses('AdminLTEController', 'AdminLTE.Controller');

class ExampleController extends AdminLTEController {

    public function login()
    {
        $this->setLayoutHeader('AdminLTE 2 | Log in');
        $this->setLayoutOptions(self::LOGIN_LAYOUT);
    }

}