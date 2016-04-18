<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo AdminLTE_Header; ?></title>
<!-- Tell the browser to be responsive to screen width -->
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	name="viewport">
  <!-- Bootstrap 3.3.5 -->
  <?php echo $this->Html->css('AdminLTE.bootstrap'); ?>
  <!-- Font Awesome -->
  <?php echo $this->Html->css('AdminLTE.font-awesome'); ?>
  <!-- Ionicons -->
  <?php echo $this->Html->css('AdminLTE.ionicons'); ?>
  <!-- Theme style -->
  <?php echo $this->Html->css('AdminLTE.AdminLTE'); ?>
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <?php echo $this->Html->css('AdminLTE.skins/'.AdminLTE_Skin); ?>
  <?php echo $this->fetch('css'); ?>
<?php

/**
 * Additional CSS
 */
if (! empty($additional_css))
    foreach ($additional_css as $css => $opts)
        echo $this->Html->css($css, $opts);
?>
  <!--[if lt IE 9]>
  <?php echo $this->Html->script('AdminLTE.html5shiv/html5shiv-3.7.3', array('inline' => true)); ?>
  <?php echo $this->Html->script('AdminLTE.respond/respond-1.4.2', array('inline' => true)); ?>
  <![endif]-->
<?php
/**
 * Additional HeadScripts
 */
if (! empty($head_additional_scripts))
    foreach ($head_additional_scripts as $script => $opts)
        echo $this->Html->script($script, $opts);

?>

    <?php echo '<style type="text/css">'.$this->fetch('cssHead').'</style>'; ?></style>
    <?php echo $this->fetch('scriptHead'); ?>
</head>
<!-- ADD THE CLASS layout-boxed TO GET A BOXED LAYOUT -->
<body class="<?php echo AdminLTE_BodyClass; ?>">
	<div class="wrapper">
		<header class="main-header"><?php echo $this->element('AdminLTE.main-header-logo'); ?><?php echo $this->element('AdminLTE.main-header-nav-bar'); ?></header>
	   <!-- LeftMainSideBar Element -->
        <?php echo $this->element('AdminLTE.left-main-sidebar'); ?>
        <!-- Content Wrapper. Contains page content -->
	   <div class="content-wrapper"> <?php echo $this->fetch('content'); ?> </div>
        <!-- Footer -->
	   <footer class="main-footer"><?php echo $this->element('AdminLTE.footer'); ?></footer>
	   <!-- Control Sidebar -->
	   <?php echo $this->element('AdminLTE.control-sidebar'); ?>
	   <div class="control-sidebar-bg"></div>
	</div>
	<!-- jQuery 2.2.0 -->
<?php echo $this->Html->script('AdminLTE.jQuery/jQuery-2.2.1', array('inline' => true)); ?>
<!-- Bootstrap 3.3.5 -->
<?php echo $this->Html->script('AdminLTE.bootstrap/bootstrap-3.3.6', array('inline' => true)); ?>
<!-- SlimScroll -->
<?php echo $this->Html->script('AdminLTE.slimScroll/jquery.slimscroll', array('inline' => true)); ?>
<!-- FastClick -->
<?php echo $this->Html->script('AdminLTE.fastclick/fastclick', array('inline' => true)); ?>
<?php

/**
 * Additional BodyScripts
 */
if (! empty($body_additional_scripts))
    foreach ($body_additional_scripts as $script => $opts)
        echo $this->Html->script($script, $opts);

?>
<!-- App -->
<?php echo $this->Html->script('AdminLTE.adminlte/app', array('inline' => true)); ?>
<!-- AdminLTE Dynamic Script -->
<?php echo $this->fetch('script'); ?>
 <script>
 	$(this).addTemplateSetup(function(){<?php echo $this->fetch('scriptAddTemplate'); ?>});
 	<?php echo $this->fetch('scriptBody'); ?>
 	$(function(){$(document).ready(function(){$(document.body).applyTemplateSetup();});});
 </script>
</body>
</html>