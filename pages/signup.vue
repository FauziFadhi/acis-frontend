<template>
  <no-ssr>
    <div class="login-page sidebar-collapse">
      <!-- Navbar -->
      <nav
        class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent"
        color-on-scroll="400"
      >
        <div class="container">
          <div class="dropdown button-dropdown">
            <a href="#pablo" class="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
              <span class="button-bar"></span>
              <span class="button-bar"></span>
              <span class="button-bar"></span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-header">Dropdown header</a>
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">One more separated link</a>
            </div>
          </div>
          <div class="navbar-translate">
            <nuxt-link
              class="navbar-brand"
              to="/"
              rel="tooltip"
              title="Designed by Invision. Coded by Creative Tim"
              data-placement="bottom"
            >Home</nuxt-link>
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
            data-nav-image="../assets/img/blurred-image-1.jpg"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Home</nuxt-link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://github.com/creativetimofficial/now-ui-kit/issues"
                >Have an issue?</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  rel="tooltip"
                  title="Follow us on Twitter"
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  target="_blank"
                >
                  <i class="fa fa-twitter"></i>
                  <p class="d-lg-none d-xl-none">Twitter</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  rel="tooltip"
                  title="Like us on Facebook"
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  target="_blank"
                >
                  <i class="fa fa-facebook-square"></i>
                  <p class="d-lg-none d-xl-none">Facebook</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  rel="tooltip"
                  title="Follow us on Instagram"
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  target="_blank"
                >
                  <i class="fa fa-instagram"></i>
                  <p class="d-lg-none d-xl-none">Instagram</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- End Navbar -->
      <div class="page-header" filter-color="orange">
        <div class="page-header-image" style="background-image: url(/archery.jpg)"></div>
        <div class="container">
          <div class="col-md-4 content-center">
            <div class="card card-login card-plain">
              <form @submit.prevent="register">
                <div class="header header-primary text-center">
                  <div class="logo-container">
                    <!-- TODO: Logo -->
                    <img src alt>
                  </div>
                </div>
                <div class="content">
                  <span class="text-danger" v-if="errors.name">
                    {{errors.name[0]}}
                  </span>
                  <div class="input-group form-group-no-border input-lg">
                    <span class="input-group-addon">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                    <input type="text" v-model="form.name" class="form-control" placeholder="Name">
                  </div>
                  <div class="input-group form-group-no-border input-lg">
                    <span class="input-group-addon">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                    <input
                      type="email"
                      placeholder="Email"
                      v-model="form.email"
                      class="form-control"
                    >
                  </div>
                  <span class="text-danger" v-if="errors.email">
                    {{errors.email[0]}}
                  </span>
                  <span class="text-danger" v-if="errors.password">
                    {{errors.password[0]}}
                  </span>
                  <div class="input-group form-group-no-border input-lg">
                    <span class="input-group-addon">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      v-model="form.password"
                      class="form-control"
                    >
                  </div>
                  <span class="text-danger" v-if="errors.gender">
                    {{errors.gender[0]}}
                  </span> <br>
                  <div class="form-check form-check-radio form-check-inline">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        v-model="form.gender"
                        name="inlineRadioOptions"
                        value="M"
                      > Male
                      <span class="form-check-sign"></span>
                    </label>
                  </div>
                  <div class="form-check form-check-radio form-check-inline">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        value="F"
                        v-model="form.gender"
                      > Female
                      <span class="form-check-sign"></span>
                    </label>
                  </div>
                  <div class="input-group form-group-no-border input-lg">
                    <span class="input-group-addon">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                    <select class="form-control">
                      <option value disabled selected>Province</option>
                    </select>
                  </div>
                  <span class="text-danger" v-if="errors.city_id">
                    {{errors.city_id[0]}}
                  </span>
                  <div class="input-group form-group-no-border input-lg">
                    <span class="input-group-addon">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                    <select v-model="form.city_id" class="form-control">
                      <option value disabled selected>City</option>
                    </select>
                  </div>
                </div>
                <div class="footer text-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-round btn-lg btn-block"
                  >Register</button>
                </div>
                <div class="pull-left">
                  <h6>
                    <nuxt-link to="/login" class="link">Login</nuxt-link>
                  </h6>
                </div>
                <div class="pull-right">
                  <h6>
                    <a href="#pablo" class="link">Need Help?</a>
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer class="footer">
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
              &copy;
              <script>
  <!-- document.write(new Date().getFullYear()); -->
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
// import axios from "axios";
export default {
  layout: "custom",
  data() {
    return {
      errors:{},
      form: {
        name: "",
        email: "",
        password: "",
        gender: null,
        city_id: null
      }
    };
  },
  methods: {
    register() {
      this.$axios
        .post("/register", this.form)
        .then(() => {
          this.$toast.success("Your Registration Success");
          this.$auth.login({ data: this.form });
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          this.$toast.error("Something wrong about your data");
        });
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
  }
};
</script>

<style>
.btn-round {
  /* border-radius: 30px !important; */
}

input[type="radio"] {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
</style>
