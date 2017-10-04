<?php
App::uses('HtmlHelper', 'View/Helper');
App::uses('Inflector', 'Utility');

class AdminLTEUIHelper extends HtmlHelper
{

    public $_contentBlockTabs = array();

    public $_tabOptions = array();

    public function tabStart($tab_title, $options = array())
    {
        $default_options = array(
            'class' => '',
            'id',
            ''
        );
        $this->_currentTab = $tab_title;
        $this->_tabOptions[$tab_title] = array_merge($default_options, $options);
        ob_start();
        return null;
    }

    public function tabEnd($finishtab = false)
    {
        $this->_contentBlockTabs[$this->_currentTab] = ob_get_clean();
        $this->_currentTab = null;
        $html = "";
        if ($finishtab !== false) {
            $li_tabs_headers = array();
            $divs_tab_content = array();
            $idx = 1;
            foreach ($this->_contentBlockTabs as $header => $tab_content) {
                $header_slugged = Inflector::slug($header) . '_' . $idx;
                $params = '';
                foreach ($this->_tabOptions[$header] as $options => $value) {
                    if (($options != 'id') && ($options != 'class') && (! empty($value)))
                        $params .= $options . '="' . $value . '"';
                }
                
                $li_tabs_headers[] = '<li class="' . ($idx == 1 ? 'active' : '') . ' ' . ((! empty($this->_tabOptions[$header]['class'])) ? $this->_tabOptions[$header]['class'] : '') . '" ' . ((! empty($this->_tabOptions[$header]['id'])) ? 'id="' . $this->_tabOptions[$header]['id'] : '') . '" ' . $params . '>
                                          <a href="#' . $header_slugged . '" data-toggle="tab">' . $header . '</a>
                                      </li>';
                $divs_tab_content[] = '<div class="tab-pane ' . ($idx == 1 ? 'active' : '') . '" id="' . $header_slugged . '">' . $tab_content . '</div>';
                $idx ++;
            }
            $li_tabs_html = join('', $li_tabs_headers);
            $tab_content_html = join('', $divs_tab_content);
            $html = '<div class="nav-tabs-custom"><ul class="nav nav-tabs">' . $li_tabs_html . '</ul><div class="tab-content">' . $tab_content_html . '</div></div>';
            $this->_contentBlockTabs = array();
        }
        
        print $html;
    }
}
