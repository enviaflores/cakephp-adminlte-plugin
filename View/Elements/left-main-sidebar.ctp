
<!-- Left side column. contains the sidebar -->
<aside class="main-sidebar">
	<!-- sidebar: style can be found in sidebar.less -->
	<section class="sidebar">
<?php
if (defined('AdminLTE_SideBarUserPanel'))
    echo AdminLTE_SideBarUserPanel;
?>
		<!-- Sidebar user panel
		<div class="user-panel">
			<div class="pull-left image">
				<img src="/admin_l_t_e/img/user2-160x160.jpg" class="img-circle"
					alt="User Image">
			</div>
			<div class="pull-left info">
				<p>Alexander Pierce</p>
				<a href="#"><i class="fa fa-circle text-success"></i> Online</a>
			</div>
		</div>
		-->
<?php
if (defined('AdminLTE_SideBarForm'))
    echo AdminLTE_SideBarForm;
?>
		<!-- TODO: side bar form
		<form action="#" method="get" class="sidebar-form">
			<div class="input-group">
				<input type="text" name="q" class="form-control"
					placeholder="Search..."> <span class="input-group-btn">
					<button type="submit" name="search" id="search-btn"
						class="btn btn-flat">
						<i class="fa fa-search"></i>
					</button>
				</span>
			</div>
		</form>
		-->
<?php
if (! empty(Configure::read('AdminLTE_SideBarMenu')))
    echo $this->element('AdminLTE.sidebar-menu');
?>
	</section>
	<!-- /.sidebar -->
</aside>