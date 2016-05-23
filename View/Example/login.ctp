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

$this->Html->divStart(array(
    'class' => 'login-box'
));

$this->Html->divStart(array(
    'class' => 'login-logo'
));
?>
<a href="../../index2.html"><b>Admin</b>LTE</a>
<?php
$this->Html->divEnd();
$this->Html->divStart(array(
    'class' => 'login-box-body'
));

echo $this->Html->para('login-box-msg', __('Sign in to start your session'));

echo $this->Form->create('Login');
$this->Html->divStart(array(
    'class' => 'form-group has-feedback'
));
?>
<input type="email" class="form-control" placeholder="Email">
<span class="glyphicon glyphicon-envelope form-control-feedback"></span>
<?php
$this->Html->divEnd();
$this->Html->divStart(array(
    'class' => 'form-group has-feedback'
));
?>
<input type="password" class="form-control" placeholder="Password">
<span class="glyphicon glyphicon-lock form-control-feedback"></span>
<?php
$this->Html->divEnd();
$this->Html->divStart(array(
    'class' => 'row'
));
$this->Html->divStart(array(
    'class' => 'col-xs-8'
));

echo $this->Form->input('Remember Me', array(
    'type' => 'checkbox',
    'id' => 'DoRememberLogin'
));
/*
 * <div class="checkbox icheck">
 * <label> <input type="checkbox"> Remember Me
 * </label>
 * </div>
 */
$this->Html->divEnd();
$this->Html->divStart(array(
    'class' => 'col-xs-4'
));
echo $this->Form->button(__('Sign In'), array(
    'id' => 'DoLogin',
    'block' => true,
    'flat' => true
));
$this->Html->divEnd();
$this->Html->divEnd();

echo $this->Html->link(
    'I forgot my password',
    '#',
    array('id' => 'DoForgotPassword')
);

$this->Html->divEnd();