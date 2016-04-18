<?php
App::uses('AdminLTEController', 'AdminLTE.Controller');

class LayoutController extends AdminLTEController
{

    /**
     * This controller does not use a model
     *
     * @var array
     */
    public $uses = array();

    /**
     * Displays a view
     *
     * @return void
     * @throws NotFoundException When the view file could not be found
     *         or MissingViewException in debug mode.
     */
    public function boxed()
    {
        $this->setLayoutHeader('AdminLTE 2 | Boxed Layout');
        $this->setBreadcrumb(array(
            array(
                'href' => '#',
                'title' => 'Home',
                'fa-icon' => 'dashboard'
            ),
            array(
                'href' => '#',
                'title' => 'Layout'
            ),
            array(
                'active' => true,
                'title' => 'Boxed'
            )
        ));
        $this->setLayoutOptions(self::BOXED_LAYOUT | self::CONTROL_SIDEBAR);
        $this->Flash->info('Add the layout-boxed class to the body tag to get this layout. The boxed layout is helpful when working on large screens because it prevents the site from stretching very wide.', array(
            'plugin' => 'AdminLTE',
            'params' => array(
                'header' => 'Tip!'
            )
        ));
    }

    public function fixed()
    {
        $this->setLayoutHeader('AdminLTE 2 | Fixed Layout');
        $this->setBreadcrumb(array(
            array(
                'href' => '#',
                'title' => 'Home',
                'fa-icon' => 'dashboard'
            ),
            array(
                'href' => '#',
                'title' => 'Layout'
            ),
            array(
                'active' => true,
                'title' => 'Fixed'
            )
        ));
        $this->setLayoutOptions(self::FIXED_LAYOUT | self::CONTROL_SIDEBAR);
        $this->Flash->info('Add the fixed class to the body tag to get this layout. The fixed layout is your best option if your sidebar is bigger than your content because it prevents extra unwanted scrolling.', array(
            'plugin' => 'AdminLTE',
            'params' => array(
                'header' => 'Tip!'
            )
        ));
    }

    public function collapsed_sidebar()
    {
        $this->setLayoutHeader('AdminLTE 2 | Collapsed Sidebar Layout');
        $this->setBreadcrumb(array(
            array(
                'href' => '#',
                'title' => 'Home',
                'fa-icon' => 'dashboard'
            ),
            array(
                'href' => '#',
                'title' => 'Layout'
            ),
            array(
                'active' => true,
                'title' => 'Collapsed Sidebar'
            )
        ));
        $this->setLayoutOptions(self::COLLAPSED_SIDEBAR | self::CONTROL_SIDEBAR);
        $this->Flash->info('Add the sidebar-collapse class to the body tag to get this layout. You should combine this option with a fixed layout if you have a long sidebar. Doing that will prevent your page content from getting stretched vertically.', array(
            'plugin' => 'AdminLTE',
            'params' => array(
                'header' => 'Tip!'
            )
        ));
    }
}
