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
          <a href="#" class="d-block">{{user.name}}</a>
        </div>
      </div>
      <template v-if="this.$route.name.includes('dashboard-competition-')">
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
            <li class="nav-item">
              <nuxt-link :to="'/dashboard/competition/'+$route.params.id" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Competition
                </p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="'/dashboard/competition/'+$route.params.id+'/participants'" class="nav-link">
                <i class="nav-icon fa fa-th"></i>
                <p>
                  Participants
                </p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="'/dashboard/competition/'+$route.params.id+'/qualification'">
                <i class="fa fa-circle-o nav-icon"></i>
                <p>Qualification</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="'/dashboard/competition/'+$route.params.id+'/elimination'" class="nav-link">
                <i class="fa fa-circle-o nav-icon"></i>
                <p>Elimination</p>
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </template>
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "sidebar"
};
</script>

<style>
</style>
