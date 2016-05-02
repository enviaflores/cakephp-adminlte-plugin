<?php
/**
 * <li class="header">LABELS</li>
 * <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
 * <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span></span></a></li>
 * <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span></span></a></li>
 */
if (! empty(Configure::read('AdminLTELeftSideMainMenu'))) {
    $AdminLTE_SideBarMenu = array();
    foreach (Configure::read('AdminLTELeftSideMainMenu') as $type => $data) {
        switch ($type) {
            case 'header':
                $AdminLTE_SideBarMenu[] = '<li class="header">' . $data['label'] . '</li>';
                break;
            case 'labels':
                foreach ($data as $labels_data) {
                    foreach ($labels_data['labels-menu'] as $labels_data_menus) {
                        $active_link = false;
                        if ($this->request->here == trim($labels_data_menus['a-href']) && trim($labels_data_menus['a-href']) != '#')
                            $active_link = true;
                        $labels_menu[] = '<li' . (($active_link == true) ? ' class="active"' : '') . '><a href="' . $labels_data_menus['a-href'] . '"><i class="fa ' . $labels_data_menus['icon'] . ((! empty($labels_data_menus['icon-color'])) ? '  text-' . $labels_data_menus['icon-color'] : '') . '"></i><span>' . $labels_data_menus['label'] . '</span></a></li>';
                    }
                    $AdminLTE_SideBarMenu[] = '<li class="header">' . $labels_data['label'] . '</li>' . ((! empty($labels_menu)) ? implode($labels_menu) : '');
                }
                break;
            case 'treeview':
                foreach ($data as $treeview_data) {
                    $treeview_menu = array();
                    $active_link = false;
                    $active_submenu = false;
                    if (! empty($treeview_data['treeview-menu']))
                        foreach ($treeview_data['treeview-menu'] as $treeview_menu_data) {
                            $active_link = false;
                            if ($this->request->here == trim($treeview_menu_data['a-href']) && trim($treeview_menu_data['a-href']) != '#') {
                                $active_link = true;
                                $active_submenu = true;
                            }
                            $treeview_menu[] = '<li' . (($active_link == true) ? ' class="active"' : '') . '><a href="' . $treeview_menu_data['a-href'] . '"><i class="fa ' . $treeview_menu_data['icon'] . ((! empty($treeview_menu_data['icon-color'])) ? '  text-' . $labels_data_menus['icon-color'] : '') . '"></i>' . $treeview_menu_data['label'] . '</a></li>';
                        }
                    $AdminLTE_SideBarMenu[] = '<li class="treeview' . (($active_submenu == true) ? ' active' : '') . '"><a href="' . (! empty($treeview_data['a-href']) ? $treeview_data['a-href'] : '#') . '"><i class="fa ' . $treeview_data['icon'] . '"></i> <span>' . $treeview_data['label'] . '</span>' . ((! empty($treeview_data['small-label'])) ? '<small class="label pull-right bg-' . $treeview_data['small-label']['color'] . '">' . $treeview_data['small-label']['label'] . '</small>' : '') . ((! empty($treeview_menu)) ? '<i class="fa fa-angle-left pull-right"></i>' : '') . '</a>' . ((! empty($treeview_menu)) ? '<ul class="treeview-menu">' . implode($treeview_menu) . '</ul>' : '') . '</li>';
                }
                break;
        }
    }

    echo '<ul class="sidebar-menu">' . implode($AdminLTE_SideBarMenu) . '</ul>';
}