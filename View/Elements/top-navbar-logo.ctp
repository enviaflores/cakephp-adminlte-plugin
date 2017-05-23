<!-- Logo -->
<?php
if (Configure::read('AdminLTEApp.logo_mini') !== false && ! defined('__ADMIN_LTE_LOGO_MINI__'))
    define('__ADMIN_LTE_LOGO_MINI__', Configure::read('AdminLTEApp.logo_mini'));

if (Configure::read('AdminLTEApp.logo_lg') !== false && ! defined('__ADMIN_LTE_LOGO_LG__'))
    define('__ADMIN_LTE_LOGO_LG__', Configure::read('AdminLTEApp.logo_lg'));

?>

<a href="#" class="navbar-brand">
    <?php
    if(defined('__ADMIN_LTE_LOGO_LG__')) {
        echo __ADMIN_LTE_LOGO_LG__;
    } else {
        echo '<b>Admin</b>LTE';
    } ?>
</a>
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
    <i class="fa fa-bars"></i>
</button>