<?php
require_once CakePlugin::path('AdminLTE') . 'Vendor/autoload.php';

App::uses('Controller', 'Controller');

class AdminLTEController extends Controller
{

    const BOXED_LAYOUT = 1;

    const FIXED_LAYOUT = 2;

    const COLLAPSED_SIDEBAR = 4;

    const TOP_NAVIGATION = 8;

    const CONTROL_SIDEBAR = 16;

    const LOGIN_LAYOUT = 32;

    const EMPTY_LAYOUT = 64;

    public $components = array(
        'Flash'
    );

    public $helpers = array(
        'Html' => array(
            'className' => 'AdminLTE.AdminLTEHtml'
        ),
        'Form' => array(
            'className' => 'AdminLTE.AdminLTEForm'
        ),
        'Widgets' => array(
            'className' => 'AdminLTE.AdminLTEWidgets'
        ),
        'Graphs' => array(
            'className' => 'AdminLTE.AdminLTEGraphs'
        ),
        'UI' => array(
            'className' => 'AdminLTE.AdminLTEUI'
        ),
        'Flash'
    );

    public $admin_lte_options = null;

    public $admin_lte_skin = 'blue';

    public $admin_lte_header = 'AdminLTE Header';

    public function __construct($request = null, $response = null)
    {
        $this->admin_lte_options = self::BOXED_LAYOUT;
        parent::__construct($request, $response);
    }

    public function beforeFilter()
    {
        parent::beforeFilter();
    }

    /**
     * Set the layout to use, with the options passed on the controller
     */
    public function beforeRender()
    {
        parent::beforeRender();

        if ($this->admin_lte_options & self::BOXED_LAYOUT && $this->admin_lte_options & self::FIXED_LAYOUT) {
            throw new InternalErrorException('Cannot use both layout boxed and fixed.');
        }

        $AdminLTE_BodyClass = array();

        $AdminLTE_BodyClass[] = 'hold-transition';

        if ($this->admin_lte_options & self::BOXED_LAYOUT)
            $AdminLTE_BodyClass[] = 'layout-boxed';

        $AdminLTE_BodyClass[] = 'skin-' . $this->admin_lte_skin;

        if ($this->admin_lte_options & self::FIXED_LAYOUT)
            $AdminLTE_BodyClass[] = 'fixed';

        if ($this->admin_lte_options & self::COLLAPSED_SIDEBAR)
            $AdminLTE_BodyClass[] = 'sidebar-collapse';

        if ($this->admin_lte_options & self::TOP_NAVIGATION) {
            defined('AdminLTE_TopNavigation', true);
            $AdminLTE_BodyClass[] = 'layout-top-nav';
        }

        if ($this->admin_lte_options & self::CONTROL_SIDEBAR)
            define('AdminLTE_ControlSideBar', true);

        $AdminLTE_BodyClass[] = 'sidebar-mini';

        if ($this->name == 'CakeError') {
            $this->layout = 'AdminLTE.error';
            $AdminLTE_BodyClass = array(
                'hold-transition login-page skin-' . $this->admin_lte_skin
            );
        }

        define('AdminLTE_BodyClass', join(' ', $AdminLTE_BodyClass));
        define('AdminLTE_Skin', 'skin-' . $this->admin_lte_skin);
        define('AdminLTE_Header', $this->admin_lte_header);

        if ($this->name == 'CakeError')
            return;

        if (! empty($this->admin_lte_breadcrumb)) {
            $_admin_lte_breadcrum = '<ol class="breadcrumb">';
            foreach ($this->admin_lte_breadcrumb as $bcData)
                $_admin_lte_breadcrum .= '<li' . ((! empty($bcData['active'])) ? ' class="active"' : '') . '>' . ((! empty($bcData['href'])) ? '<a href="' . $bcData['href'] . '">' : '') . ((! empty($bcData['fa-icon'])) ? '<i class="fa fa-' . $bcData['fa-icon'] . '"></i>' : '') . $bcData['title'] . ((! empty($bcData['href'])) ? '</a>' : '') . '</li>';
            $_admin_lte_breadcrum .= '</ol >';
            define('AdminLTE_Breadcrumb', $_admin_lte_breadcrum);
        }

        if ($this->admin_lte_options & self::FIXED_LAYOUT || $this->admin_lte_options & self::BOXED_LAYOUT)
            $this->layout = 'AdminLTE.admin-lte';
        else
            if ($this->admin_lte_options & self::LOGIN_LAYOUT)
                $this->layout = 'AdminLTE.login';

        if ($this->admin_lte_options & self::EMPTY_LAYOUT)
            $this->layout = 'AdminLTE.empty';
    }

    /**
     * Set the layout to use, using the constants below:
     *
     * BOXED_LAYOUT, FIXED_LAYOUT, COLLAPSED_SIDEBAR, TOP_NAVIGATION, CONTROL_SIDEBAR, LOGIN_LAYOUT, EMPTY_LAYOUT
     *
     * @param $options
     */
    public function setLayoutOptions($options)
    {
        $this->admin_lte_options = $options;
    }

    /**
     * Set the layout header
     *
     * @param string $header Text to use how header of the layout.
     */
    public function setLayoutHeader($header)
    {
        $this->admin_lte_header = $header;
    }

    /**
     * Set the breadcrumb information
     *
     * @param array $elements The elements of the breadcrumb.
     */
    public function setBreadcrumb($elements = array())
    {
        $this->admin_lte_breadcrumb = $elements;
    }

    public function setLayoutSkin($skin)
    {
        switch ($skin) {
            case 'blue':
            case 'blue-light':
            case 'yellow':
            case 'yellow-light':
            case 'green':
            case 'green-light':
            case 'purple':
            case 'purple-light':
            case 'red':
            case 'red-light':
            case 'black':
            case 'black-light':
                $this->admin_lte_skin = $skin;
                break;
        }
    }

    public function index()
    {}
}
