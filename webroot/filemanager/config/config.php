<?php
if (session_id() == '')
    session_start();

mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');
mb_http_input('UTF-8');
mb_language('uni');
mb_regex_encoding('UTF-8');
ob_start('mb_output_handler');
date_default_timezone_set('Europe/Rome');

/*
 |--------------------------------------------------------------------------
 | Optional security
 |--------------------------------------------------------------------------
 |
 | if set to true only those will access RF whose url contains the access key(akey) like:
 | <input type="button" href="../filemanager/dialog.php?field_id=imgField&lang=en_EN&akey=myPrivateKey" value="Files">
 | in tinymce a new parameter added: filemanager_access_key:"myPrivateKey"
 | example tinymce config:
 |
 | tiny init ...
 | external_filemanager_path:"../filemanager/",
 | filemanager_title:"Filemanager" ,
 | filemanager_access_key:"myPrivateKey" ,
 | ...
 |
 */

define('USE_ACCESS_KEYS', false); // TRUE or FALSE


/*
 |--------------------------------------------------------------------------
 | DON'T COPY THIS VARIABLES IN FOLDERS config.php FILES
 |--------------------------------------------------------------------------
 */

define('DEBUG_ERROR_MESSAGE', true); // TRUE or FALSE


/*
 |--------------------------------------------------------------------------
 | Path configuration
 |--------------------------------------------------------------------------
 | In this configuration the folder tree is
 | root
 |    |- source <- upload folder
 |    |- thumbs <- thumbnail folder [must have write permission (755)]
 |    |- filemanager
 |    |- js
 |    |   |- tinymce
 |    |   |   |- plugins
 |    |   |   |   |- responsivefilemanager
 |    |   |   |   |   |- plugin.min.js
 */

$cfgFile = null;
if (isset($_GET['cfgFile'])) {
    $cfgFile = $_GET['cfgFile'];
    $_SESSION['RF']['cfgFile'] = $cfgFile;
} else
    if (isset($_SESSION['RF']['cfgFile'])) {
        $cfgFile = $_SESSION['RF']['cfgFile'];
    }
if (empty($cfgFile))
    die('cfgFile doesnt exists');

if (isset($cfgFile) && ! empty($cfgFile) && strpos($cfgFile, '../') === FALSE && strpos($cfgFile, './') === FALSE && strpos($cfgFile, '..\\') === FALSE && strpos($cfgFile, '.\\') === FALSE && file_exists('file://' . __DIR__ . '/' . $cfgFile . '.php'))
    return include __DIR__ . '/' . $cfgFile . '.php';
else
    die('config file doesnt exists' . __DIR__ . '/' . $cfgFile . '.php');

define('__CFGFILE__', $cfgFile);