<template>
  <aside class="main-sidebar sidebar-dark-danger elevation-4">
    <!-- Brand Logo -->
    <nuxt-link to="/" class="brand-link bg-dark">
      <span class="brand-text font-weight-light">ACIS</span>
    </nuxt-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <!-- <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" /> -->
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
            <template v-if="committee">
              <li class="nav-item">
                <nuxt-link :to="'/dashboard/competition/'+$route.params.id" class="nav-link">
                  <i class="nav-icon fa fa-dashboard"></i>
                  <p>Competition</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  :to="'/dashboard/competition/'+$route.params.id+'/participants'"
                  class="nav-link"
                >
                  <i class="nav-icon fa fa-th"></i>
                  <p>Participants</p>
                </nuxt-link>
              </li>
            </template>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="'/dashboard/competition/'+$route.params.id+'/qualification'"
              >
                <i class="fa fa-circle-o nav-icon"></i>
                <p>Qualification</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                :to="'/dashboard/competition/'+$route.params.id+'/elimination'"
                class="nav-link"
              >
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
  name: "sidebar",
  data() {
    return {
      committee: false
    };
  },
  created() {
    this.$axios
      .get("/competitions", {
        params: {
          createdBy: this.user.id
        }
      })
      .then(resp => {
        if (resp.data.data.length == 0) {
          this.committee = false;
        } else this.committee = true;
      });
  }
};
</script>

<style>
</style>
