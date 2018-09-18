<?php
App::uses('HtmlHelper', 'View/Helper');

class AdminLTEWidgetsHelper extends HtmlHelper
{

    public $_defaultBoxOptions = array(
        'variant' => 'default'
    );

    /*
     * array (
     * 'full-color|color' => 'blue|yellow|red|green'
     * 'fa-icon' => ''
     * 'text' = 'text'
     * 'number' => 'number'
     * 'progress-bar => array( 'percentage' => '70', 'description' => 'description' )
     * )
     */
    /**
     *
     * @param array $options
     *            array(
     *            'type' => 'info|more_info',
     *            'full-color' => 'red',
     *            'color' => 'yellow',
     *            'fa-icon' => 'calendar',
     *            'number' => 45,
     *            'text' => 'New Order',
     *            'href' => 'https://www.google.com',
     *            'href-icon' => 'hand-o-right',
     *            'progress' => array(
     *            'percentage' => 67,
     *            'description' => 'Sesenta y siete',
     *            )
     * @return string
     * @link https://adminlte.io/themes/AdminLTE/pages/widgets.html
     */
    public function infoBox($options = array())
    {
        $html_data = '<div class="' . ((! empty($options['type']) && $options['type'] == 'more_info') ? 'small' : 'info') . '-box' . ((! empty($options['full-color'])) ? ' bg-' . $options['full-color'] : '') . '">';
        
        if (! empty($options['type']) && $options['type'] == 'more_info') {
            if (isset($options['number']) || ! empty($options['text']))
                $html_data .= '<div class="inner"><h3>' . (isset($options['number']) ? intval($options['number']) : '0') . '</h3> <p>' . (! empty($options['text']) ? $options['text'] : '') . '</p></div>';
            
            if (! empty($options['fa-icon']))
                $html_data .= '<div class="icon"><i class="fa fa-' . $options['fa-icon'] . '"></i></div>';
            
            if (! empty($options['href']))
                $html_data .= '<a href="' . $options['href'] . '" class="small-box-footer">' . (! empty($options['href-text']) ? $options['href-text'] : 'More info') . ' <i class="fa fa-' . (! empty($options['href-icon']) ? $options['href-icon'] : 'arrow-circle-right') . '"></i></a>';
        } elseif (! empty($options['type']) && $options['type'] == 'info') {
            if (! empty($options['fa-icon']))
                $html_data .= '<span class="info-box-icon ' . ((! empty($options['color'])) ? ' bg-' . $options['color'] : '') . '"><i class="fa fa-' . $options['fa-icon'] . '"></i></span>';
            
            $html_data .= '<div class="info-box-content"><span class="info-box-text">' . $options['text'] . '</span><span class="info-box-number">' . $options['number'] . '</span>';
            
            if (! empty($options['progress']))
                $html_data .= '<div class="progress"><div class="progress-bar" style="width: ' . $options['progress']['percentage'] . '%"></div></div><span class="progress-description">' . $options['progress']['description'] . '</span>';
            $html_data .= '</div>';
        }
        
        $html_data .= '</div>';
        
        return $html_data;
    }

    /**
     *
     * @param $options array(
     *            'header' => array(
     *            'title' => 'Header',
     *            'border' => true,
     *            )
     *            'footer' => 'Footer'
     *            'variant' => 'default|primary|info|warning|success|danger',
     *            'box-tools' => array(
     *            'collapsable' => 'collapsable tooltip',
     *            'remove' => 'remove tooltip',
     *            'label' => 'label title',
     *            'input' => 'place holder'
     *            ),
     *            'loading-state' => true
     * @return NULL
     */
    public function defaultBoxStart($options = array())
    {
        $this->_defaultBoxOptions = array_merge($this->_defaultBoxOptions, $options);
        ob_start();
        return null;
    }

    public function defaultBoxEnd()
    {
        $buffer = ob_get_clean();
        $_box_html_str = '<div class="box box-' . $this->_defaultBoxOptions['variant'] . '">';
        if ($this->_defaultBoxOptions['header'] !== false) {
            $_box_html_str .= '<div class="box-header' . ((! empty($this->_defaultBoxOptions['header']['border'])) ? ' with-border' : '') . '">';
            $_box_html_str .= '<h3 class="box-title">' . $this->_defaultBoxOptions['header']['title'] . '</h3>';
            if (! empty($this->_defaultBoxOptions['box-tools'])) {
                $_box_html_str .= '<div class="box-tools pull-right">';
                if (! empty($this->_defaultBoxOptions['box-tools']['label']))
                    $_box_html_str .= '<span class="label label-primary">' . $this->_defaultBoxOptions['box-tools']['label'] . '</span>';
                if (! empty($this->_defaultBoxOptions['box-tools']['collapsable']))
                    $_box_html_str .= '<button class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="' . $this->_defaultBoxOptions['box-tools']['collapsable'] . '"><i class="fa fa-minus"></i></button>';
                if (! empty($this->_defaultBoxOptions['box-tools']['remove']))
                    $_box_html_str .= '      <button class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="' . $this->_defaultBoxOptions['box-tools']['remove'] . '"><i class="fa fa-times"></i></button>';
                $_box_html_str .= '</div>';
            }
            $_box_html_str .= '</div>';
        }
        
        $_box_html_str .= '<div class="box-body">' . $buffer . '</div>';
        if (! empty($this->_defaultBoxOptions['footer']))
            $_box_html_str .= '<div class="box-footer">' . $this->_defaultBoxOptions['footer'] . '</div>';
        $_box_html_str .= '</div>';
        
        print $_box_html_str;
    }
}