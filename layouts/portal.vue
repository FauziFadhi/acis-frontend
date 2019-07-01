<template>
  <no-ssr>
    <div class="index-page sidebar-collapse">
      <!-- Navbar -->
      <nav
        class="navbar navbar-expand-lg bg-info fixed-top mb-0"
        color-on-scroll="500"
        style="opacity:50%;"
      >
        <template v-if="full">
        <div class="container">
          <div class="navbar-translate">
            <a
              class="navbar-brand"
              rel="tooltip"
              title="Designed by Invision. Coded by Creative Tim"
              data-placement="bottom"
            >ACIS</a>
            <template v-if="loggedIn">
              <nuxt-link
                class="navbar-brand"
                rel="tooltip"
                to="/profile"
                title="Designed by Invision. Coded by Creative Tim"
                data-placement="bottom"
              >
                <i class="now-ui-icons business_badge"></i>
                <p>Profile</p>
              </nuxt-link>
              <nuxt-link
                class="navbar-brand"
                rel="tooltip"
                to="/create-tournament"
                title="Designed by Invision. Coded by Creative Tim"
                data-placement="bottom"
              >
                <i class="now-ui-icons business_badge"></i>
                <p>Create Tournament</p>
              </nuxt-link>
              
            </template>
            <button
              class="navbar-toggler navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navigation"
            data-nav-image="./archery.jpg"
          >
            <template v-if="!loggedIn">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/login">
                    <i class="now-ui-icons business_badge"></i>
                    <p>Login</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/signup">
                    <i class="now-ui-icons business_badge"></i>
                    <p>Sign Up</p>
                  </nuxt-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="/dashboard" class="nav-link">
                    <i class="now-ui-icons business_badge"></i>
                    <p>Dashboard</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="return:false" class="nav-link" @click.prevent="logout">
                    <i class="now-ui-icons business_badge"></i>
                    <p>Logout</p>
                  </a>
                </li>
              </ul>
            </template>
          </div>
        </div>
        </template>
      </nav>
      <!-- End Navbar -->
      <div class="wrapper">
        <div class="page-header clear-filter" filter-color="orange">
          <div
            class="page-header-image"
            data-parallax="true"
            style="background-image: url(/archery.jpg)"
          ></div>
          <div class="container">
            <div class="content-center brand">
              <img class="n-logo" src alt>
              <h1 class="h1-seo">Now UI Kit.</h1>
              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>
            </div>
            <h6 class="category category-absolute">
              Designed by
              <a href target="_blank">
                <img src class="invision-logo">
              </a>. Coded by
              <a href="https://www.creative-tim.com" target="_blank">
                <img src class="creative-tim-logo">
              </a>.
            </h6>
          </div>
        </div>
        <nuxt/>
        <!--  End Modal -->
        <footer class="footer" data-background-color="black">
          <div class="container">
            <nav>
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">Creative Tim</a>
                </li>
                <li>
                  <a href="http://presentation.creative-tim.com">About Us</a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">Blog</a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md"
                  >MIT License</a>
                </li>
              </ul>
            </nav>
            <div class="copyright">
              &copy; j
              <script>
  <!-- document.write(new Date().getFullYear()) -->
              </script>2019, Designed by
              <a href="http://www.invisionapp.com" target="_blank">Invision</a>. Coded by
              <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
            </div>
          </div>
        </footer>
      </div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  data(){
    return{
      full: true
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    }
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
      },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
      },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/now-ui-kit.css?v=1.1.0" }
    ]
  },
  mounted() {
    // nowuiKit.initNavbarImage();
    // $navbar = $(".navbar[color-on-scroll]");
    // scroll_distance = $navbar.attr("color-on-scroll") || 500;
    // // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
    // if ($(".navbar[color-on-scroll]").length != 0) {
    //   nowuiKit.checkScrollForTransparentNavbar();
    //   $(window).on("scroll", nowuiKit.checkScrollForTransparentNavbar);
    // }
  },
  created(){
    if(this.user != null && this.user.id != 1){
      if(_.chain(this.user).values().reject('email_verified_at').includes(null).value()){

        this.full = false;
        this.$router.push('/profile')
      }
    }
  }
};
</script>

<style>
body {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 1.5px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  background: rgb(123, 143, 255);
}
</style>
