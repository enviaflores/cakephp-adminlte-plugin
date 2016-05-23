<?php
App::uses('AdminLTEController', 'AdminLTE.Controller');

class WidgetsController extends AdminLTEController
{

    public function index()
    {
        $this->setLayoutHeader('AdminLTE 2 | Widgets');
        $this->setBreadcrumb(array(
            array(
                'href' => '#',
                'title' => 'Home',
                'fa-icon' => 'dashboard'
            ),
            array(
                'active' => true,
                'title' => 'Widgets'
            )
        ));
        $this->setLayoutOptions(self::FIXED_LAYOUT | self::CONTROL_SIDEBAR);

    }
}