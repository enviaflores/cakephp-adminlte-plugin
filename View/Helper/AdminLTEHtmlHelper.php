<?php
App::uses('HtmlHelper', 'View/Helper');

class AdminLTEHtmlHelper extends HtmlHelper
{

    public $_sectionBlockOptions = array();

    public $_divBlockOptions = array();

    public $_defaultBoxOptions = array(
        'variant' => 'default'
    );

    public $_controlSideBarStartOptions = array(
        'color' => 'dark'
    );

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
        if (! empty($this->_defaultBoxOptions['header'])) {
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

    public function defaultBox($content, $options = array())
    {
        print $this->useTag('block', $options, $content);
    }

    public function dataTableStruct($fieldName, $options = array(), $data = array())
    {
        $this->script('AdminLTE.datatables/datatables-1.10.11', array(
            'inline' => false
        ));
        $this->script('AdminLTE.datatables/datatables-bootstrap', array(
            'inline' => false
        ));

        $this->script('AdminLTE.datatables/datatables-responsive', array(
            'inline' => false
        ));

        $this->css('AdminLTE.datatables/datatables', null, array(
            'inline' => false
        ));

        if ($fieldName !== false) {
            $html = '<div class="table-responsive">';
            $html .= '<table id ="' . Inflector::variable($fieldName) . '" class="table table-responsive table-striped table-bordered">';
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

        $dialogId = Inflector::variable($fieldName . 'Dialog');

        if (empty($options['dialog-footer'])) {
            $options['dialog-footer'] .= <<<EOF
                <button id="{$dialogId}CloseBtn" type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button id="{$dialogId}SaveBtn" type="button" class="btn btn-primary">Save changes</button>
EOF;
        }

        $html_data .= <<<EOF
        <div id="{$dialogId}" tabindex="-1" role="dialog" class="modal fade">
            <div class="modal-dialog">
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
        $this->_View->append('modal-dialogs', vsprintf($html_data, array(
            $options['dialog-header'],
            $options['dialog-content'],
            $options['dialog-footer']
        )));
        return $dialogId;
    }

    public function button($fieldName, $options = array())
    {
        if (empty($option['button-size']))
            $option['button-size'] = 'btn-xs';

        if (empty($options['button-type'])) {
            $options['button-type'] = 'btn-primary';
        }
        $field_id = Inflector::variable($fieldName . 'Button');
        $html_data = <<<EOF
        <button id="{$field_id}" class="btn {$options['button-size']} {$options['button-type']}" type="button">{$fieldName}</button>
EOF;
        return $html_data;
    }

    public function dropdown_button($fieldName, $options = array())
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
                    $menu_opts[] = '<li><a id="' . Inflector::variable($fieldName . '_' . $opt_menu_data['name']) . ((isset($opt_menu_data['ref'])) ? '" ref="' . $opt_menu_data['ref'] : '') . '" href="' . $opt_menu_data['href'] . '">' . $opt_menu_data['name'] . '</a></li>';
                    break;
            }
        }

        return vsprintf($html_data, join('', $menu_opts));
    }
}
