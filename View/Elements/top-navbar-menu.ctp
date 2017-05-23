<?php
if(Configure::read('AdminLTE_TopMenu')):
    $items_menu = array();

    foreach (Configure::read('AdminLTE_TopMenu') as $item){
        switch ($item['type']) {
            case 'link':
                $items_menu[] = '<li><a href="'.$item['a-href'].'">'.$item['label'].'</a></li>';
                break;
            case 'dropdown':
                $dropdown_menu = '';
                foreach($item['items'] as $item_dropdown){
                    $dropdown_menu .= '<li><a href="'.$item_dropdown['a-href'].'">'.$item_dropdown['label'].'</a></li>';
                    if(isset($item_dropdown['divider']))
                        $dropdown_menu .= '<li class="divider"></li>';
                }
                $dropdown_menu ='<li class="dropdown">
                                    <a href="'.$item['a-href'].'" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">'.$item['label'].' <span class="caret"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        '.$dropdown_menu.'
                                    </ul>
                                </li>';
                $items_menu[] = $dropdown_menu;
                break;
        }
    }
    echo '<ul class="nav navbar-nav">'.implode($items_menu).'</ul>';
endif; ?>
<form class="navbar-form navbar-left" role="search">
    <div class="form-group">
        <input class="form-control" id="navbar-search-input" placeholder="Search" type="text">
    </div>
</form>