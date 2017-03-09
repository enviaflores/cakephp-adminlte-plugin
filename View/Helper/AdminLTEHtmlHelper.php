<?php
App::uses('HtmlHelper', 'View/Helper');

class AdminLTEHtmlHelper extends HtmlHelper
{

    public $_sectionBlockOptions = array();

    public $_divBlockOptions = array();

    public $_controlSideBarStartOptions = array(
        'color' => 'dark'
    );

    public $_timeLine = array();
    
    // required vars for tabs helpers
    public $_contentBlockOptions = array();

    public $_contentBlockTabs = array();

    public $_currentTab = null;

    public function __construct(View $View, $settings = array( ))
    {
        parent::__construct($View, $settings);
        $this->_tags['section'] = '<section %s>%s</section>';
        $this->_tags['divLTE'] = '<div %s>%s</div>';
        $this->_tags['span'] = '<span %s>%s</span>';
    }

    public function getMainHeaderLogo()
    {
        if (file_exists(APP . 'View/Elements/main-header-logo.ctp') && is_readable(APP . 'View/Elements/main-header-logo.ctp')) {
            $css_file = APP . 'View/Elements/css/main-header-logo.css';
            if (file_exists($css_file)) {
                $this->_View->start('cssHead');
                include_once $css_file;
                $this->_View->end();
            }
            $js_file = APP . 'View/Elements/js/main-header-logo.js';
            if (file_exists($js_file)) {
                $this->_View->start('scriptBody');
                include_once $js_file;
                $this->_View->end();
            }
            ob_start();
            require_once APP . 'View/Elements/main-header-logo.ctp';
            return ob_get_clean();
        } else 
            if (file_exists(CakePlugin::path('AdminLTE') . 'View/Elements/main-header-logo.ctp') && is_readable(CakePlugin::path('AdminLTE') . 'View/Elements/main-header-logo.ctp')) {
                $css_file = CakePlugin::path('AdminLTE') . 'View/Elements/css/main-header-logo.css';
                if (file_exists($css_file)) {
                    $this->_View->start('cssHead');
                    include_once $css_file;
                    $this->_View->end();
                }
                $js_file = CakePlugin::path('AdminLTE') . 'View/Elements/js/main-header-logo.js';
                if (file_exists($js_file)) {
                    $this->_View->start('scriptBody');
                    include_once $js_file;
                    $this->_View->end();
                }
                ob_start();
                require_once CakePlugin::path('AdminLTE') . 'View/Elements/main-header-logo.ctp';
                return ob_get_clean();
            } else {
                return '<!-- [NoMainHeaderLogoDefined] -->';
            }
    }

    public function getMainHeaderNavBar()
    {
        if (file_exists(APP . 'View/Elements/main-header-nav-bar.ctp') && is_readable(APP . 'View/Elements/main-header-nav-bar.ctp')) {
            $css_file = APP . 'View/Elements/css/main-header-nav-bar.css';
            if (file_exists($css_file)) {
                $this->_View->start('cssHead');
                include_once $css_file;
                $this->_View->end();
            }
            $js_file = APP . 'View/Elements/js/main-header-nav-bar.js';
            if (file_exists($js_file)) {
                $this->_View->start('scriptBody');
                include_once $js_file;
                $this->_View->end();
            }
            ob_start();
            require_once APP . 'View/Elements/main-header-nav-bar.ctp';
            return ob_get_clean();
        } else 
            if (file_exists(CakePlugin::path('AdminLTE') . 'View/Elements/main-header-nav-bar.ctp') && is_readable(CakePlugin::path('AdminLTE') . 'View/Elements/main-header-nav-bar.ctp')) {
                $css_file = CakePlugin::path('AdminLTE') . 'View/Elements/css/main-header-nav-bar.css';
                if (file_exists($css_file)) {
                    $this->_View->start('cssHead');
                    include_once $css_file;
                    $this->_View->end();
                }
                $js_file = CakePlugin::path('AdminLTE') . 'View/Elements/js/main-header-nav-bar.js';
                if (file_exists($js_file)) {
                    $this->_View->start('scriptBody');
                    include_once $js_file;
                    $this->_View->end();
                }
                ob_start();
                require_once CakePlugin::path('AdminLTE') . 'View/Elements/main-header-nav-bar.ctp';
                return ob_get_clean();
            } else {
                return '<!-- [NoMainHeaderNavBarDefined] -->';
            }
    }

    public function setTag($key, $value)
    {
        $this->_tags[$key] = $value;
    }

    public function sectionStart($options = array())
    {
        array_push($this->_sectionBlockOptions, $options);
        ob_start();
        return null;
    }

    public function sectionEnd()
    {
        $buffer = ob_get_clean();
        $options = array_pop($this->_sectionBlockOptions);
        print $this->useTag('section', $options, $buffer);
    }

    public function divStart($options = array())
    {
        array_push($this->_divBlockOptions, $options);
        ob_start();
        return null;
    }

    public function divEnd()
    {
        $buffer = ob_get_clean();
        $options = array_pop($this->_divBlockOptions);
        print $this->useTag('divLTE', $options, $buffer);
    }

    public function controlSideBarStart($options = array())
    {
        $this->_controlSideBarStartOptions = array_merge($this->_controlSideBarStartOptions, $options);
        ob_start();
        return null;
    }

    public function controlSideBarEnd($options = array())
    {
        $buffer = ob_get_clean();
        $_sidebar_html_str = '<aside class="control-sidebar control-sidebar-' . $this->_controlSideBarStartOptions['color'] . '">' . $buffer . '</aside><div class="control-sidebar-bg"></div>';
        define('AdminLTE_ControlSideBar_HTML', $_sidebar_html_str);
    }

    /**
     * See: https://datatables.net/extensions/responsive/examples/column-control/classes.html
     *
     * @param unknown $fieldName            
     * @param array $options            
     * @param array $data            
     * @return string
     */
    public function dataTableStruct($fieldName, $options = array(), $data = array())
    {
        $this->script('AdminLTE.datatables/datatables-1.10.12', array(
            'inline' => false
        ));
        $this->script('AdminLTE.datatables/1.10.12/bootstrap', array(
            'inline' => false
        ));
        
        $this->script('AdminLTE.datatables/1.10.12/responsive', array(
            'inline' => false
        ));
        
        $this->script('AdminLTE.datatables/1.10.12/buttons', array(
            'inline' => false
        ));
        
        $this->script('AdminLTE.datatables/1.10.12/buttons/colVis', array(
            'inline' => false
        ));
        
        $this->script('AdminLTE.datatables/1.10.12/buttons/html5', array(
            'inline' => false
        ));
        
        $this->script('AdminLTE.adminlte/datatables', array(
            'inline' => false
        ));
        
        $this->css('AdminLTE.datatables/bootstrap', array(
            'inline' => false
        ));
        
        $this->css('AdminLTE.datatables/responsive', array(
            'inline' => false
        ));
        
        $this->css('AdminLTE.datatables/buttons/bootstrap', null, array(
            'inline' => false
        ));
        
        $this->css('AdminLTE.datatables/buttons/datatables', null, array(
            'inline' => false
        ));
        
        if ($fieldName !== false) {
            $html = '<div class="table-responsive">';
            $html .= '<table id ="' . Inflector::variable($fieldName) . '" style="width: 100%" class="table responsive table-striped table-bordered nowrap">';
            $html .= '<thead>' . ((! empty($options['headers'])) ? $this->tableHeaders($options['headers']) : '') . '</thead>';
            if (empty($data))
                $html .= '<tbody>' . ((! empty($options['body'])) ? $options['body'] : '') . '</tbody>';
            else {
                $ncols = count($options['headers']);
                foreach ($data as $_data) {
                    $cols = 0;
                    $html .= '<tr>';
                    foreach ($_data as $k => $v) {
                        $html .= '<td>' . $v . '</td>';
                        $cols ++;
                    }
                    if ($ncols > $cols)
                        $html .= str_repeat('<td>&nbsp;</td>', ($ncols - $cols));
                    $html .= '</tr>';
                }
            }
            $html .= '<tfoot>' . ((! empty($options['footer'])) ? $options['footer'] : '') . '</tfoot>';
            $html .= '</table>';
            $html .= '</div>';
            return $html;
        }
    }

    public function dialog($fieldName, $options = array())
    {
        if (empty($options['dialog-header']))
            $options['dialog-header'] = $fieldName;
        
        if (empty($options['dialog-content']))
            $options['dialog-content'] = '&nbsp;';
        
        FB::info($options, __METHOD__);
        if (isset($options['save-btn-label']) && $options['save-btn-label'] !== false && empty($options['save-btn-label'])) {
            $options['save-btn-label'] = 'Save changes';
        }
        
        if (empty($options['close-btn-label']))
            $options['close-btn-label'] = 'Close';
        
        $dialogId = Inflector::variable($fieldName . 'Dialog');
        
        FB::info($options, __METHOD__);
        if (empty($options['dialog-footer'])) {
            $options['dialog-footer'] .= <<<EOF
                <button id="{$dialogId}CloseBtn" type="button" class="btn btn-default" data-dismiss="modal">{$options['close-btn-label']}</button>
EOF;
            if (isset($options['save-btn-content']) && ! empty($options['save-btn-content']))
                $options['dialog-footer'] .= $options['save-btn-content'];
            else 
                if (isset($options['save-btn-label']) && $options['save-btn-label'] !== false) {
                    $options['dialog-footer'] .= <<<EOF
                    <button id="{$dialogId}SaveBtn" type="button" class="btn btn-primary">{$options['save-btn-label']}</button>
EOF;
                }
        }
        $html_data = '';
        $style_wh = array();
        if (isset($options['height']) && ! empty($options['height']))
            $style_wh[] = 'height:' . $options['height'];
        
        if (isset($options['width']) && ! empty($options['width']))
            $style_wh[] = 'width:' . $options['width'];
        
        $style_wh_str = '';
        if (! empty($style_wh))
            $style_wh_str = ' style="' . str_replace('%', '%%', join(';', $style_wh)) . '" ';
        
        FB::info($style_wh_str, __METHOD__);
        $html_data .= <<<EOF
        <div id="{$dialogId}" tabindex="-1" role="dialog" class="modal fade">
            <div class="modal-dialog" {$style_wh_str}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 id="{$dialogId}Header" class="modal-title"><i class="icon-hdd"></i> %s</h4>
                    </div>
                    <div id="{$dialogId}Body" class="modal-body">%s</div>
                    <div id="{$dialogId}Footer" class="modal-footer">%s</div>
                </div>
            </div>
        </div>
EOF;
        FB::info($html_data);
        $this->_View->append('modal-dialogs', vsprintf($html_data, array(
            $options['dialog-header'],
            $options['dialog-content'],
            $options['dialog-footer']
        )));
        
        return $dialogId;
    }

    public function button($fieldName, $options = array())
    {
        if (! empty($options['type'])) {
            switch ($options['type']) {
                case 'app':
                    return $this->buttonApp($fieldName, $options);
                    break;
                case 'dropdown':
                    return $this->buttonDropDown($fieldName, $options);
                    break;
                case 'box-tool-icon':
                    return $this->buttonBoxToolIcon($fieldName, $options);
                    break;
            }
        }
        if (! isset($option['button-size']))
            $options['button-size'] = '';
        
        if (! isset($options['button-type']))
            $options['button-type'] = 'btn-primary';
        
        if (isset($options['id']))
            $field_id = $options['id'];
        else
            $field_id = Inflector::variable($fieldName . 'Button');
        
        $style = '';
        
        if (isset($options['style']))
            $style = ' style="' . $options['style'] . '"';
        
        if (isset($options['nolabel']))
            $fieldName = '';
        
        $icon_str = '';
        if (isset($options['button-icon']))
            $icon_str = '<i class="fa fa-' . $options['button-icon'] . '">';
        
        $onclick_str = '';
        if (isset($options['onclick']))
            $onclick_str = ' onclick="' . $options['onclick'] . '" ';
        
        $html_data = <<<EOF
        <button id="{$field_id}" class="btn {$options['button-size']} {$options['button-type']}"{$style}{$onclick_str}>{$icon_str}{$fieldName}</button>
EOF;
        return $html_data;
    }

    public function buttonBoxToolIcon($fieldName, $options = array())
    {
        if (isset($options['id']))
            $field_id = $options['id'];
        else
            $field_id = Inflector::variable($fieldName . 'Button');
        
        $data_toggle = '';
        if (isset($options['data-toggle']))
            $data_toggle = ' data-toggle="' . $options['data-toggle'] . '"';
        
        $html_data = <<<EOF
        <button id="{$field_id}" class="btn btn-box-tool" type="button" {$data_toggle}><i class="fa fa-{$options['icon']}"></i></button>
EOF;
        return $html_data;
    }

    public function buttonApp($fieldName, $options = array())
    {
        if (empty($options['button-icon']))
            $options['button-icon'] = 'plus';
        $fieldNotification = '';
        if (! empty($options['button-notification-color']) && ! empty($options['button-notification-label']))
            $fieldNotification = '<span class="badge bg-' . $options['button-icon'] . '">' . $options['button-notification-label'] . '</span>';
        
        if (empty($options['href']))
            $options['href'] = '#';
        
        if (isset($options['id']))
            $field_id = $options['id'];
        else
            $field_id = Inflector::variable($fieldName . 'Button');
        
        $on_click = '';
        if (isset($options['onclick']))
            $on_click = ' onclick="' . $options['onclick'] . '"';
        
        $html_data = <<<EOF
        <a id="{$field_id}" href="{$options['href']}" class="btn btn-app" {$on_click}>{$fieldNotification}<i class="fa fa-{$options['button-icon']}"></i>{$fieldName}</a>
EOF;
        return $html_data;
    }

    public function buttonDropDown($fieldName, $options = array())
    {
        if (empty($options['button-type'])) {
            $options['button-type'] = 'btn-primary';
        }
        
        $html_data = <<<EOF
        <div class="btn-group">
            <button type="button" class="btn {$options['button-type']} dropdown-toggle" data-toggle="dropdown">
                {$fieldName} <span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-arrow" role="menu">%s</ul>
        </div>
EOF;
        
        if (isset($options['id']))
            $field_id = $options['id'];
        else
            $field_id = Inflector::variable($fieldName . 'Button');
        
        $menu_opts = array();
        foreach ($options['menu'] as $opt_menu_data) {
            if (empty($opt_menu_data['href']))
                $opt_menu_data['href'] = 'javascript:;';
            if (! isset($opt_menu_data['type']))
                $opt_menu_data['type'] = 'button';
            switch ($opt_menu_data['type']) {
                case 'divider':
                    $menu_opts[] = '<li class="divider"></li>';
                    break;
                default:
                    $menu_opts[] = '<li><a id="' . Inflector::variable($field_id . '_' . $opt_menu_data['name']) . ((isset($opt_menu_data['ref'])) ? '" ref="' . $opt_menu_data['ref'] : '') . '" href="' . $opt_menu_data['href'] . '">' . $opt_menu_data['name'] . '</a></li>';
                    break;
            }
        }
        
        return vsprintf($html_data, join('', $menu_opts));
    }

    public function startTimeLine($fieldName, $options = array())
    {
        $this->_timeLine = array();
    }

    public function addTimeLine($label, $header, $body, $footer, $time, $options = array())
    {
        $defaultOpts = array(
            'label-color' => 'red',
            'icon' => 'envelope',
            'icon-color' => 'blue',
            'header-class' => '',
            'body-class' => '',
            'footer-class' => ''
        );
        
        $options += $defaultOpts;
        
        $timeLine = <<<EOF
    <li class="time-label"><span class="bg-{$options['label-color']}"> {$label} </span></li>
    <li>
        <i class="fa fa-{$options['icon']} bg-{$options['icon-color']}"></i>
        <div class="timeline-item">
EOF;
        if (! empty($time)) {
            $timeLine .= <<<EOF
<span class="time"><i class="fa fa-clock-o"></i> {$time}</span>
EOF;
        }
        $timeLine .= <<<EOF
            <h3 class="timeline-header {$options['header-class']}">{$header}</h3>
            <div class="timeline-body {$options['body-class']}">{$body}</div>
            <div class="timeline-footer {$options['footer-class']}">{$footer}</div>
        </div>
    </li>
EOF;
        
        $this->_timeLine[] = $timeLine;
    }

    public function endTimeLine()
    {
        echo '<ul class="timeline">' . join("\n", $this->_timeLine) . '<li><i class="fa fa-clock-o bg-gray"></i></li></ul>';
    }

    public function pogressbar($fieldName, $options = array())
    {
        $defaultOpts = array(
            'label' => $fieldName,
            'type' => 'bar-primary',
            'value' => 0
        );
        $options += $defaultOpts;
        
        if (isset($options['id']))
            $field_id = $options['id'];
        else
            $field_id = Inflector::variable($fieldName . 'ProgressBar');
        
        $progressBar = <<<EOF
<p>{$options['label']}</p>
<div class="progress">
    <div id="{$field_id}" class="progress-bar progress-{$options['type']} progress-bar-striped" role="progressbar" aria-valuenow="{$options['value']}" aria-valuemin="0" aria-valuemax="100" style="width: {$options['value']}%">
        <span class="sr-only"></span>
    </div>
</div>
EOF;
        echo $progressBar;
        $this->_View->append("scriptBody", "var _set$field_id = function(percentage){ $('#$field_id').attr('style','width: ' + percentage + '%');};\n");
    }

    public function contentBlockStart($options = array())
    {
        ob_start();
        $this->_contentBlockOptions = $options;
        return null;
    }

    public function contentBlockEnd()
    {
        $buffer = ob_get_clean();
        $options = $this->_contentBlockOptions;
        $this->_contentBlockOptions = array();
        $tabs = $this->_contentBlockTabs;
        return $this->contentBlock($buffer, $options, $tabs);
    }

    public function contentTabStart($tab_title)
    {
        $this->_currentTab = $tab_title;
        ob_start();
        return null;
    }

    public function contentTabEnd()
    {
        $this->_contentBlockTabs[$this->_currentTab] = ob_get_clean();
        $this->_currentTab = null;
        return null;
    }

    public function contentBlock($buffer, $options = array(), $tabs = array())
    {
        $_html = '<div class="nav-tabs-custom">';
        $_html .= '<ul class="nav nav-tabs pull-right">';
        
        $tab_iterator = count($tabs);
        
        if ($options['header'] !== false && ! is_array($options['header'])) {
            
            $_tmpHeader = $options['header'];
            unset($options['header']);
            $options['header']['title'] = $_tmpHeader;
        }
        
        FB::info($options);
        
        $_defaultOptions = array(
            'variant' => 'default',
            'color' => 'primary'
        );
        
        $_options = array_merge($_defaultOptions, $options);
        
        $_html .= '<div class="box-header' . ((! empty($_options['header']['border'])) ? ' with-border' : '') . '">';
        $_html .= '<h3 class="box-title">' . ((! empty($_options['header']['icon'])) ? '<i class="fa fa-' . $_options['header']['icon'] . '"></i> ' : '') . $_options['header']['title'] . '</h3>';
        if (! empty($_options['box-tools'])) {
            $_html .= '<div class="box-tools pull-right">';
            if (! empty($_options['box-tools']['label']))
                $_html .= '<span class="label label-' . $_options['color'] . '">' . $_options['box-tools']['label'] . '</span>';
            if (! empty($_options['box-tools']['collapsable']))
                $_html .= '<button class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="' . $_options['box-tools']['collapsable'] . '"><i class="fa fa-minus"></i></button>';
            if (! empty($_options['box-tools']['remove']))
                $_html .= '<button class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="' . $_options['box-tools']['remove'] . '"><i class="fa fa-times"></i></button>';
            $_html .= '</div>';
        }
        $_html .= '</div>';
        $_html .= '</ul>';
        
        $_html .= '<div class="box-body">';
        
        if ($tab_iterator > 0) {
            $tabs_content = array();
            $tabs_headers = array_reverse($tabs);
            foreach ($tabs_headers as $header => $content) {
                $link_ref = '#tab_' . $tab_iterator . '-' . $tab_iterator;
                $class = ($tab_iterator == 1) ? ' class="active"' : '';
                $_html .= '<li' . $class . ' id="dynamic_tab_' . $tab_iterator . '"><a href="' . $link_ref . '" data-toggle="tab">' . $header . '</a></li>';
                $tab_iterator --;
                $tabs_content[] = $content;
            }
            
            $_html .= '<div class="tab-content">';
            foreach ($tabs_content as $content) {
                $class = ($tab_iterator == 1) ? 'active' : '';
                $div_id = 'tab_' . $tab_iterator . '-' . $tab_iterator;
                $_html .= '<div class="tab-pane ' . $class . '" id="' . $div_id . '">' . $content . '</div>';
                $tab_iterator --;
            }
            $_html .= '</div>'; // end div tab-content
        } else {
            $_html .= $buffer;
        }
        
        $_html .= '</div>';
        
        if (! empty($options['footer']))
            $_html .= '<div class="box-footer">' . $options['footer'] . '</div>';
        
        $_html .= '</div>'; // end div nav-tabs-custom
        echo $_html;
    }
}
