<template>
  <aside class="main-sidebar sidebar-dark-danger elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link bg-dark">
      <img
        src="dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      >
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->
          <li class="nav-item has-treeview menu-open">
            <nuxt-link to="/competition/" class="nav-link">
              <i class="nav-icon fa fa-dashboard"></i>
              <p>
                Competition
                <i class="right fa fa-angle-left"></i>
              </p>
            </nuxt-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/competition/new">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Create</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/competition/elimination/bracket" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Bracket</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fa fa-th"></i>
              <p>
                Simple Link
                <span class="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: 'sidebar'
};
</script>

<style>
</style>
