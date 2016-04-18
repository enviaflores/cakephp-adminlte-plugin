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
}$this->Html->controlSideBarStart();
?>
Control Side Bar
<?php
$this->Html->controlSideBarEnd();
$this->Html->sectionStart(array('class' => 'content-header')); ?>

<h1>
	Fixed Layout <small>Blank example to the fixed layout</small>
</h1>
<?php
if( defined('AdminLTE_Breadcrumb'))
    echo AdminLTE_Breadcrumb;

$this->Html->sectionEnd();

$this->Html->sectionStart(array(
    'class' => 'content'
));

echo $this->Flash->render();

$this->Html->defaultBoxStart(array(
    'header' => array(
        'title' => 'Title',
        'border' => true
    ),
    //'variant' => 'info',
    'footer' => 'Footer'
));
?>
Start creating your amazing application!
<?php $this->Html->defaultBoxEnd(); ?>
<?php $this->Html->sectionEnd(); ?>