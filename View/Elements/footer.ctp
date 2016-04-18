<?php if( Configure::read('AdminLTEApp.copyright_disclaimer') && Configure::read('AdminLTEApp.copyright_year') && Configure::read('AdminLTEApp.version') && Configure::read('AdminLTEApp.name') && Configure::read('AdminLTEApp.developer_link')): ?>
<div class="pull-right hidden-xs">
	<b><?php echo __('Version')?></b> <?php echo Configure::read('AdminLTEApp.version'); ?>
</div>
<strong><?php echo __('Copyright')?> &copy; <?php echo Configure::read('AdminLTEApp.copyright_year'); ?> <a
	href="<?php echo Configure::read('AdminLTEApp.developer_link'); ?>"><?php echo Configure::read('AdminLTEApp.name'); ?></a>.
</strong>
<?php echo __('All rights reserved.'); ?>
<?php endif; ?>