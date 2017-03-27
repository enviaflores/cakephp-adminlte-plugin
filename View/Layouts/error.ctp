<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>AdminLTE 2 | 404 Page not found</title>
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
  <!--[if lt IE 9]>
  <?php echo $this->Html->script('AdminLTE.html5shiv/html5shiv-3.7.3', array('inline' => true)); ?>
  <?php echo $this->Html->script('AdminLTE.respond/respond-1.4.2', array('inline' => true)); ?>
  <![endif]-->

</head>
<body class="<?php echo AdminLTE_BodyClass; ?>">
<?php echo $this->fetch('content'); ?>
<!-- jQuery 2.2.1 -->
<?php echo $this->Html->script('AdminLTE.jQuery/jQuery-2.2.4', array('inline' => true)); ?>
<!-- Bootstrap 3.3.5 -->
<?php echo $this->Html->script('AdminLTE.bootstrap/bootstrap-3.3.6', array('inline' => true)); ?>
<!-- SlimScroll -->
<?php echo $this->Html->script('AdminLTE.slimScroll/slimscroll-1.3.8', array('inline' => true)); ?>
<!-- FastClick -->
<?php echo $this->Html->script('AdminLTE.fastclick/fastclick', array('inline' => true)); ?>
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