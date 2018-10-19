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
            $this->response->type('json');

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
                $content = curl_exec($ch);

                if (curl_errno($ch) !== 0) {
                    $curl_error_msg = curl_error($ch);
                }
                curl_close($ch);

                if (isset($curl_error_msg)) {
                    throw new Exception('Invalid request, ERR: ' . $curl_error_msg);
                }

                $result = json_decode($content, true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    $response['content'] = $content;
                    throw new Exception('Invalid JSON, ERR: ' . json_last_error_msg());
                }
                $response['success'] = true;
                $response['data'] = $result;
            } catch (Exception $ex) {
                $response['errorMsg'] = $ex->getMessage();
            } finally {
                $this->response->body(json_encode($response));
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