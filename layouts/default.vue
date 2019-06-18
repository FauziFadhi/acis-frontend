<template>
<no-ssr>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
      <!-- Navbar -->
      <navbar/>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <sidebar/>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Starter Page</h1>
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Starter Page</li>
                </ol>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
          <div class="container-fluid">
            <nuxt/>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
        <rightSideBar/>
      </aside>
      <!-- /.control-sidebar -->

      <!-- Main Footer -->
      <Footer/>
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->

    <!-- jQuery -->
  </body>
</no-ssr>
</template>

<script>
import sidebar from "~/components/sidebar/sidebar.vue";
import rightSideBar from "~/components/sidebar/rightSideBar.vue";
import navbar from "~/components/navbar/navbar.vue";
import Footer from "~/components/footer.vue";
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' },
      { rel: "stylesheet", href: "/css/bootstrap-vue.min.css" },
      { rel: "stylesheet", href: "/css/adminlte.min.css" }
    ]
  },
  components: {
    navbar,
    sidebar,
    Footer,
    rightSideBar
  },
  mounted(){
    if(!this.loggedIn)
      this.$router.push({name: 'login'})
  }
};
</script>

<style>
</style>
