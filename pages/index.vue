<template>
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
</template>

<script>
export default {
  layout: "portal",
  
};
</script>


