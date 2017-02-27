<!-- Logo -->
<?php
if (Configure::read('AdminLTEApp.logo_mini') !== false && ! defined('__ADMIN_LTE_LOGO_MINI__'))
    define('__ADMIN_LTE_LOGO_MINI__', Configure::read('AdminLTEApp.logo_mini'));

if (Configure::read('AdminLTEApp.logo_lg') !== false && ! defined('__ADMIN_LTE_LOGO_LG__'))
    define('__ADMIN_LTE_LOGO_LG__', Configure::read('AdminLTEApp.logo_lg'));

?><a
    id="AdminLTELogo"
    href="#"
    class="logo"> <!-- mini logo for sidebar mini 50x50 pixels --> <span class="logo-mini"><?php if(!defined('__ADMIN_LTE_LOGO_MINI__')) { echo '<b>A</b>LT'; } else { echo __ADMIN_LTE_LOGO_MINI__; } ?></span> <span class="logo-lg"><?php if(!defined('__ADMIN_LTE_LOGO_LG__')) { echo '<b>Admin</b>LTE'; } else { echo __ADMIN_LTE_LOGO_LG__; } ?></span>
</a>