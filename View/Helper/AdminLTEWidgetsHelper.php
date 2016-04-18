<?php
App::uses('HtmlHelper', 'View/Helper');

class AdminLTEWidgetsHelper extends HtmlHelper
{

    /*
     * array (
     * 'full-color|color' => 'blue|yellow|red|green'
     * 'fa-icon' => ''
     * 'text' = 'text'
     * 'number' => 'number'
     * 'progress-bar => array( 'percentage' => '70', 'description' => 'description' )
     * )
     */
    public function infoBox($options = array())
    {
        $html_data = '<div class="info-box' . ((!empty($options['full-color'])) ? ' bg-' . $options['full-color'] : '') . '">';
        if (! empty($options['fa-icon']))
            $html_data .= '<span class="info-box-icon ' . ((!empty($options['color'])) ? ' bg-' . $options['color'] : '') . '"><i class="fa fa-' . $options['fa-icon'] . '"></i></span>';
        $html_data .= '<div class="info-box-content"><span class="info-box-text">' . $options['text'] . '</span><span class="info-box-number">' . $options['number'] . '</span>';

        if (! empty($options['progress']))
            $html_data .= '<div class="progress"><div class="progress-bar" style="width: ' . $options['progress']['percentage'] . '%"></div></div><span class="progress-description">' . $options['progress']['description'] . '</span>';

        $html_data .= '</div>';
        $html_data .= '</div>';

        return $html_data;
    }
}