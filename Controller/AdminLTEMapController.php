<?php
/**
 * Created by PhpStorm.
 * User: alexbravo
 * Date: 10/18/18
 * Time: 3:50 PM
 */

class AdminLTEMapController  extends AppController {

    function index() {

    }

    function downloadGeoJson() {
        if ($this->request->is('ajax')) {
            // Always must return a valid Json
            error_reporting(0);
            $this->autoRender = false;
            $this->autoLayout = false;
            $this->layout = 'AdminLTE.json';

            $response = [
                'success' => false,
                'errorMsg' => ''
            ];
            try {
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $this->request->data['url']);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_HEADER, false);
                curl_setopt($ch, CURLOPT_TIMEOUT, 10);
                $result = curl_exec($ch);
                curl_close($ch);

                $result = json_decode($result, true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    throw new Exception(json_last_error_msg());
                }
                $response['success'] = true;
                $response['data'] = $result;
            } catch (Exception $ex) {
                $response['errorMsg'] = $ex->getMessage();
            } finally {
                $this->render(false);
                echo json_encode($response);
                die();
            }
        }
    }

    function beforeFilter() {
        parent::beforeFilter();
    }

    function beforeRender() {
        parent::beforeRender();
    }
}