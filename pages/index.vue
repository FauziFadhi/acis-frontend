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
            <p class="category">This Month Tournament List</p>
            <!-- Nav tabs -->
            <div class="card">
              <div class="card-body px-0">
                <div class="col-md-12 p-0">
                  <div class="row px-4">
                    <div class="col-md">
                      <div class="card-title font-weight-bold mb-1">Tahura Archery Competition</div>
                      <div class="card-subtitle text-secondary">Creator</div>
                      <p
                        class="text-justify"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt error ut voluptatum veniam et numquam placeat, illum necessitatibus ullam accusamus! Autem aspernatur ipsa tenetur, nam vero sit laboriosam reiciendis ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perspiciatis? Sit fugit eos saepe provident unde excepturi omnis, in non quod sunt eum harum autem vero vel iste aspernatur accusantium.</p>
                      <div class="d-flex">
                        <div>
                          <a class="btn-sm btn-secondary">Button 1</a>
                          <a class="btn-sm btn-secondary">Button 2</a>
                        </div>
                        <div class="ml-auto text-secondary" style="height=30px;">Address , Date</div>
                      </div>
                    </div>
                    <div class="col-md-2 order-first p-0">
                      <img src="#">
                    </div>
                  </div>
                </div>
              </div>
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
              <ul
                class="nav nav-tabs justify-content-center"
                role="tablist"
                data-background-color="orange"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active text-dark"
                    data-toggle="tab"
                    href="#nasional"
                    role="tab"
                  >
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
              <div class="card-body p-0">
                <!-- Tab panes -->
                <div class="tab-content" style="overflow-y:auto; max-height:400px;">
                  <div class="tab-pane" id="nasional" role="tabpanel">
                    <div class="card-body px-0">
                      <div class="col-md-12 p-0">
                        <div class="row px-4">
                          <div class="col-md">
                            <div class="card-title font-weight-bold mb-1">Tahura Archery Competition</div>
                            <div class="card-subtitle text-secondary">Creator</div>
                            <p
                              class="text-justify"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt error ut voluptatum veniam et numquam placeat, illum necessitatibus ullam accusamus! Autem aspernatur ipsa tenetur, nam vero sit laboriosam reiciendis ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perspiciatis? Sit fugit eos saepe provident unde excepturi omnis, in non quod sunt eum harum autem vero vel iste aspernatur accusantium.</p>
                            <div class="d-flex">
                              <div>
                                <a class="btn-sm btn-secondary">Button 1</a>
                                <a class="btn-sm btn-secondary">Button 2</a>
                              </div>
                              <div
                                class="ml-auto text-secondary"
                                style="height=30px;"
                              >Address , Date</div>
                            </div>
                          </div>
                          <div class="col-md-2 order-first p-0">
                            <img src="#">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="province" role="tabpanel"></div>
                  <div class="tab-pane" id="city" role="tabpanel"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "portal"
};
</script>


