<?php
/**
 * Placeholder Plugin
 * Image Controller
 *
 * @version 2010-08-16
 * @author  ohguma
 *
 * [url]
 * /placeholder/image/(format)/(size)/(text color)/(background color)?text=(text)
 *   format: (png|jpg|gif)
 *   size  : 240x240, 100(100x100)
 *   color : ffffff
 */
App::uses('AdminLTEController', 'AdminLTE.Controller');

class AdminLTEImagePlaceHolderController extends AdminLTEController
{

    var $uses = array();

    var $autoRender = false;

    var $im = null;

    function beforeFilter()
    {
        if (! in_array($this->action, array(
            'png',
            'gif',
            'jpg'
        ))) {
            die("Cannot Suport format");
        }
        
        // check size
        if (isset($this->params['pass'][0])) {
            $size = $this->params['pass'][0];
        } else {
            $size = 100;
        }
        if (is_numeric($size)) {
            $width = $height = $size;
        } elseif (preg_match('/^(\d+)\D(\d+)$/', $size, $ma)) {
            $width = $ma[1];
            $height = $ma[2];
        }
        $this->im = imagecreate($width, $height) or die("Cannot Initialize new GD image stream");
        
        // check background color
        if (isset($this->params['pass'][2]) && preg_match('/^([\da-f]{2})([\da-f]{2})([\da-f]{2})/i', $this->params['pass'][2], $ma)) {
            $r = hexdec($ma[1]);
            $g = hexdec($ma[2]);
            $b = hexdec($ma[3]);
        } else {
            $r = $g = $b = 240;
        }
        $bgcolor = imagecolorallocate($this->im, $r, $g, $b);
        
        // check text color
        if (isset($this->params['pass'][1]) && preg_match('/^([\da-f]{2})([\da-f]{2})([\da-f]{2})/i', $this->params['pass'][1], $ma)) {
            $r = hexdec($ma[1]);
            $g = hexdec($ma[2]);
            $b = hexdec($ma[3]);
        } else {
            $r = $g = $b = 160;
        }
        $color = imagecolorallocate($this->im, $r, $g, $b);
        
        // check text
        if (isset($this->params['url']['text'])) {
            $text = $this->params['url']['text'];
        } else {
            $text = $width . ' x ' . $height;
        }
        
        $exploded_string = explode("<br>", urldecode($text));
        $next_offset_y = null;
        foreach ($exploded_string as $es_idx => $es_data) {
            $es_data = str_replace("<tab>", "    ", $es_data);
            $len = strlen($es_data);
            for ($fontsize = 5; $fontsize > 0; $fontsize --) {
                $fw = imagefontwidth($fontsize) * $len;
                $fh = imagefontheight($fontsize);
                if ($fw <= $width && $fh <= $height)
                    break;
            }
            if (empty($next_offset_y))
                $next_offset_y = ($height - $fh) / 2;
            else
                $next_offset_y += $fh;
            
            imagestring($this->im, $fontsize, ($width - $fw) / 2, $next_offset_y, $es_data, $color);
        }
        ob_start();
    }

    function afterFilter()
    {
        $bin = ob_get_contents();
        $this->response->header("Content-Length: ", ob_get_length());
        ob_end_clean();
        $this->response->header("Content-Disposition: ", "attachment; filename='" . md5(microtime() . mt_rand(0, mt_getrandmax())) . "'");
        echo $bin;
        imagedestroy($this->im);
    }

    function png()
    {
        $this->response->header("Content-type: image/png");
        imagepng($this->im);
    }

    function jpg()
    {
        $this->response->header("Content-type: image/jpeg");
        imagejpeg($this->im);
    }

    function gif()
    {
        $this->response->header("Content-type: image/gif");
        imagegif($this->im);
    }

    private function __imagestring($image, $font, $x, $y, $string, $color)
    {
        $font_height = imagefontheight($font);
        $font_width = imagefontwidth($font);
        $image_height = imagesy($image);
        $image_width = imagesx($image);
    }
}
