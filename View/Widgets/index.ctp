<?php
/**
 * Include if exists CSS Styles
 */
if (file_exists(dirname(__FILE__) . '/css/' . basename(__FILE__, 'ctp') . 'css')) {
    $this->start('cssHead');
    include_once dirname(__FILE__) . '/css/' . basename(__FILE__, 'ctp') . 'css';
    $this->end();
}
/**
 * Include if exists JS Code
 */
if (file_exists(dirname(__FILE__) . '/js/' . basename(__FILE__, 'ctp') . 'js')) {
    $this->start('scriptBody');
    include_once dirname(__FILE__) . '/js/' . basename(__FILE__, 'ctp') . 'js';
    $this->end();
}
App::uses('CakeNumber', 'Utility');

$this->Html->controlSideBarStart();
?>
Control Side Bar
<?php
$this->Html->controlSideBarEnd();
$this->Html->sectionStart(array(
    'class' => 'content-header'
));
?>
<h1>
	Widgets <small>Preview page</small>
</h1>
<?php
if (defined('AdminLTE_Breadcrumb'))
    echo AdminLTE_Breadcrumb;

$this->Html->sectionEnd();

$this->Html->sectionStart(array(
    'class' => 'content'
));
echo $this->Flash->render();

$this->Html->divStart(array(
    'class' => 'row'
));

$this->Html->divStart(array(
    'class' => 'col-md-3 col-sm-6 col-xs-12'
));
print $this->Widgets->infoBox(array(
    'color' => 'aqua',
    'fa-icon' => 'envelope-o',
    'text' => 'Messages',
    'number' => CakeNumber::format(1410, array(
        'places' => 2,
        'before' => '',
        'escape' => false,
        'decimals' => '.',
        'thousands' => ','
    ))
));
$this->Html->divEnd();

$this->Html->divStart(array(
    'class' => 'col-md-3 col-sm-6 col-xs-12'
));
print $this->Widgets->infoBox(array(
    'color' => 'green',
    'fa-icon' => 'flag-o',
    'text' => 'Bookmarks',
    'number' => CakeNumber::format(410, array(
        'places' => 2,
        'before' => '',
        'escape' => false,
        'decimals' => '.',
        'thousands' => ','
    ))
));
$this->Html->divEnd();

$this->Html->divStart(array(
    'class' => 'col-md-3 col-sm-6 col-xs-12'
));
print $this->Widgets->infoBox(array(
    'color' => 'yellow',
    'fa-icon' => 'files-o',
    'text' => 'Uploads',
    'number' => CakeNumber::format(13648, array(
        'places' => 2,
        'before' => '',
        'escape' => false,
        'decimals' => '.',
        'thousands' => ','
    ))
));
$this->Html->divEnd();

$this->Html->divStart(array(
    'class' => 'col-md-3 col-sm-6 col-xs-12'
));
print $this->Widgets->infoBox(array(
    'color' => 'red',
    'fa-icon' => 'star-o',
    'text' => 'Likes',
    'number' => CakeNumber::format(93139, array(
        'places' => 2,
        'before' => '',
        'escape' => false,
        'decimals' => '.',
        'thousands' => ','
    ))
));
$this->Html->divEnd();

$this->Html->divStart(array(
    'class' => 'col-md-3 col-sm-6 col-xs-12'
));
print $this->Widgets->infoBox(array(
    'full-color' => 'aqua',
    'fa-icon' => 'envelope-o',
    'text' => 'Messages',
    'progress' => array(
        'percentage' => 70,
        'description' => '70% Increase in 30 Days'
    ),
    'number' => CakeNumber::format(1410, array(
        'places' => 2,
        'before' => '',
        'escape' => false,
        'decimals' => '.',
        'thousands' => ','
    ))
));
$this->Html->divEnd();

$this->Html->divStart(array(
    'class' => 'col-md-3 col-sm-6 col-xs-12'
));
print $this->Widgets->infoBox(array(
    'full-color' => 'green',
    'fa-icon' => 'flag-o',
    'text' => 'Bookmarks',
    'progress' => array(
        'percentage' => 70,
        'description' => '70% Increase in 30 Days'
    ),
    'number' => CakeNumber::format(410, array(
        'places' => 2,
        'before' => '',
        'escape' => false,
        'decimals' => '.',
        'thousands' => ','
    ))
));
$this->Html->divEnd();

$this->Html->divStart(array(
    'class' => 'col-md-3 col-sm-6 col-xs-12'
));
print $this->Widgets->infoBox(array(
    'full-color' => 'yellow',
    'fa-icon' => 'files-o',
    'text' => 'Uploads',
    'progress' => array(
        'percentage' => 70,
        'description' => '70% Increase in 30 Days'
    ),
    'number' => CakeNumber::format(13648, array(
        'places' => 2,
        'before' => '',
        'escape' => false,
        'decimals' => '.',
        'thousands' => ','
    ))
));
$this->Html->divEnd();

$this->Html->divStart(array(
    'class' => 'col-md-3 col-sm-6 col-xs-12'
));
print $this->Widgets->infoBox(array(
    'full-color' => 'red',
    'fa-icon' => 'star-o',
    'text' => 'Likes',
    'progress' => array(
        'percentage' => 70,
        'description' => '70% Increase in 30 Days'
    ),
    'number' => CakeNumber::format(93139, array(
        'places' => 2,
        'before' => '',
        'escape' => false,
        'decimals' => '.',
        'thousands' => ','
    ))
));
$this->Html->divEnd();

$this->Html->divEnd();
$this->Html->sectionEnd();

?>