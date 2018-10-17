<?php
/**
 * Created by PhpStorm.
 * User: alexbravo
 * Date: 10/16/18
 * Time: 4:30 PM
 */

App::uses('AppHelper', 'View/Helper');


class AdminLTEMapHelper extends AppHelper {

    public $helpers = ['Html'];
    // By default Monterrey center
    private $center = [
        'latitude' => 25.686613,
        'longitude' => -100.316116
    ];
    private $zoom = 8;

    public function __construct(View $view, $settings = array()) {
        parent::__construct($view, $settings);

        if (!empty($settings['center'])) {
            $this->center = $settings['center'];
        }
        if (!empty($settings['zoom'])) {
            $this->zoom = $settings['zoom'];
        }
    }

    public function drawMap() {
        $google_maps_key = Configure::read('google_maps_key');
        $center = $this->center;
        $zoom = $this->zoom;

        if (empty($google_maps_key)) {
            throw new BadRequestException('Missing Google Maps API key');
        }
        $this->_View->set(compact('google_maps_key', 'center', 'zoom'));
        return $this->_View->render('AdminLTE.Elements/map', false);
    }
}
