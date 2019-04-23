<template>
  <div class="index-page sidebar-collapse">
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent mb-0"
      color-on-scroll="500"
    >
      <div class="container">
        <div class="navbar-translate">
          <a
            class="navbar-brand"
            href="#"
            rel="tooltip"
            title="Designed by Invision. Coded by Creative Tim"
            data-placement="bottom"
            target="_blank"
          >ACIS</a>
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
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/login">
                <i class="now-ui-icons business_badge"></i>
                <p>Login</p>
              </a>
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
      <div class="main">
        <!-- carrousel -->
        <div class="section" id="carousel">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-10">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  </ol>
                  <div class="carousel-inner" role="listbox">
                    <!-- image carrousel -->
                    <div class="carousel-item active">
                      <img class="d-block" src="/archery.jpg" alt="First slide">
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Nature, United States</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block" src="/login.jpg" alt="Second slide">
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Somewhere Beyond, United States</h5>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <i class="now-ui-icons arrows-1_minimal-left"></i>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <i class="now-ui-icons arrows-1_minimal-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="TournamentList">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
                <p class="category">Tournament List</p>
                <!-- Nav tabs -->
                <div class="card">
                  <ul class="nav nav-tabs justify-content-center" role="tablist" data-background-color="orange">
                    <li class="nav-item">
                      <a class="nav-link active text-dark" data-toggle="tab" href="#nasional" role="tab">
                        <i class="now-ui-icons objects_umbrella-13"></i> National
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-dark" data-toggle="tab" href="#province" role="tab">
                        <i class="now-ui-icons shopping_cart-simple"></i> Province
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-dark" data-toggle="tab" href="#city" role="tab">
                        <i class="now-ui-icons shopping_shop"></i> City
                      </a>
                    </li>
                  </ul>
                  <div class="card-body">
                    <!-- Tab panes -->
                    <div class="tab-content text-center" style="overflow-y:auto; max-height:400px;">
                      <div class="tab-pane active" id="nasional" role="tabpanel">
                        <table class="table table-condensed">
                          <tbody>
                            <tr>
                              <th style="width: 0px">#</th>
                              <th>Name</th>
                              <th>Location</th>
                              <th>Date</th>
                            </tr>
                            <tr v-for="(i,index) in 30" :key="i">
                              <td>{{ index+1 }}</td>
                              <td>aaaaaaaaaa</td>
                              <td>Bandung, Jawa Barat</td>
                              <td> 04 May - 30 May 2019</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="tab-pane" id="province" role="tabpanel">
                      </div>
                      <div class="tab-pane" id="city" role="tabpanel">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="section" id="carousel">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-10">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img class="d-block" src="/archery.jpg" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Nature, United States</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" src="/login.jpg" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Somewhere Beyond, United States</h5>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <i class="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <i class="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>-->
      </div>
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
</template>

<script>
export default {
  layout: "portal",
  mounted() {
    // nowuiKit.initNavbarImage();

    $navbar = $(".navbar[color-on-scroll]");
    scroll_distance = $navbar.attr("color-on-scroll") || 500;

    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

    if ($(".navbar[color-on-scroll]").length != 0) {
      nowuiKit.checkScrollForTransparentNavbar();
      $(window).on("scroll", nowuiKit.checkScrollForTransparentNavbar);
    }
  }
};
</script>

<style>
body {
  background-color: transparent !important;
}

::-webkit-scrollbar {
  width: 1.5px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  background: rgb(123, 143, 255);
}
</style>
