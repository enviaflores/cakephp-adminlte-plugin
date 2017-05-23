<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo AdminLTE_Header; ?></title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <?php echo $this->Html->css('AdminLTE.bootstrap'); ?>
    <!-- Font Awesome -->
    <?php echo $this->Html->css('AdminLTE.font-awesome'); ?>
    <!-- Ionicons -->
    <?php echo $this->Html->css('AdminLTE.ionicons'); ?>
    <!-- AdminLTE -->
    <?php echo $this->Html->css('AdminLTE.AdminLTE'); ?>
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <?php echo $this->Html->css('AdminLTE.skins/'.AdminLTE_Skin); ?>
    <?php
    /**
     * Additional CSS
     */
    if (! empty($additional_css))
        foreach ($additional_css as $css => $opts)
            echo $this->Html->css($css, $opts);
    echo $this->fetch('css');
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

    <?php echo '<style type="text/css">'.$this->fetch('cssHead').'</style>'; ?>
    <?php echo $this->fetch('scriptHead'); ?>
</head>
<!-- ADD THE CLASS layout-top-nav TO REMOVE THE SIDEBAR. -->
<body class="hold-transition <?php echo AdminLTE_BodyClass; ?>">
<div class="wrapper">
    <header class="main-header">
        <nav class="navbar navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <?php echo $this->element('AdminLTE.top-navbar-logo') ?>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
                    <?php echo $this->element('AdminLTE.top-navbar-menu') ?>
                </div>
                <!-- /.navbar-collapse -->
                <!-- Navbar Right Menu -->
                <div class="navbar-custom-menu">
                    <?php echo $this->element('AdminLTE.header-custom-menu') ?>
                </div>
                <!-- /.navbar-custom-menu -->
            </div>
            <!-- /.container-fluid -->
        </nav>
    </header>
    <!-- Full Width Column -->
    <div class="content-wrapper">
        <div class="container">
            <?php echo $this->fetch('content'); ?>
            <!-- /.content -->
        </div>
        <!-- /.container -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
        <div class="container">
            <?php echo $this->element('AdminLTE.footer'); ?>
        </div>
        <!-- /.container -->
    </footer>
</div>
<!-- ./wrapper -->

<!-- jQuery 2.2.0 -->
<?php echo $this->Html->script('AdminLTE.jQuery/jQuery-2.2.4', array('inline' => true)); ?>
<!-- Bootstrap 3.3.5 -->
<?php echo $this->Html->script('AdminLTE.bootstrap/bootstrap-3.3.6', array('inline' => true)); ?>
<!-- SlimScroll -->
<?php echo $this->Html->script('AdminLTE.slimScroll/slimscroll-1.3.8', array('inline' => true)); ?>
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
<!-- AdminLTE App -->
<?php echo $this->Html->script('AdminLTE.adminlte/app', array('inline' => true)); ?>
</body>
</html>
