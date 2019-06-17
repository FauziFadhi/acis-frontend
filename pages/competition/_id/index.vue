<template>
  <div class="main">
    <div class="section pb-0" id="TournamentName">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <div class="row px-4">
              <div class="mr-auto">
                <p class="category">
                  Tournament Name
                  <a class="btn-sm btn-success btn-outline-dark text-white">Register</a>
                </p>
              </div>
              <div class="row">
                <span class="font-weight-bold">Payment Status:</span>
                <span>&nbsp; &nbsp;Status {{}}</span>
                <a to="#">icon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- carrousel -->
    <div class="section pt-2" id="carousel">
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
    <div class="section" id="QuotaList">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <p class="category">Quota Participant</p>
            <!-- Nav tabs -->
            <div class="card">Chart</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="participantList">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <p class="category">Participant List</p>
            <!-- Nav tabs -->
            <div class="card">
              <ul
                class="nav nav-tabs nav-tabs-neutral justify-content-center"
                role="tablist"
                data-background-color="orange"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active text-black-50"
                    data-toggle="tab"
                    href="#home1"
                    role="tab"
                  >Compettiion Detail Name {}</a>
                </li>
              </ul>
              <div class="card-body">
                <!-- Tab panes -->
                <!-- TODO: dont forget to change id title and body -->
                <div class="tab-content text-center">
                  <div class="tab-pane active" id="home1" role="tabpanel">
                    <table class="table-striped table">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Team</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Fauzi Fadhillah</td>
                          <td>BACS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="qualificationList">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <p class="category">Qualification</p>
            <!-- Nav tabs -->
            <div class="card">
              <ul
                class="nav nav-tabs nav-tabs-neutral justify-content-center"
                role="tablist"
                data-background-color="orange"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active text-black-50"
                    data-toggle="tab"
                    href="#home1"
                    role="tab"
                  >Compettiion Detail Name {}</a>
                </li>
              </ul>
              <div class="card-body">
                <!-- Tab panes -->
                <!-- TODO: dont forget to change id title and body -->
                <div class="tab-content text-center">
                  <div class="tab-pane active" id="home1" role="tabpanel">
                    <table class="table-striped table">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Target</th>
                          <th>Nama</th>
                          <th>Team</th>
                          <th>Total</th>
                          <th>X+10</th>
                          <th>10</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1A</td>
                          <td>Fauzi Fadhillah</td>
                          <td>BACS</td>
                          <td>378</td>
                          <td>23</td>
                          <td>20</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="elimination">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <p class="category">Elimination</p>
            <!-- Nav tabs -->
            <div class="card">
              <ul
                class="nav nav-tabs nav-tabs-neutral justify-content-center"
                role="tablist"
                data-background-color="orange"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active text-black-50"
                    data-toggle="tab"
                    href="#home1"
                    role="tab"
                  >Compettiion Detail Name {}</a>
                </li>
              </ul>
              <div class="card-body">
                <!-- Tab panes -->
                {Bracket content Center}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sart Modal -->
    <!-- DataTarget id modal -->
    <div
      class="modal fade"
      id="paymentReceipt"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header justify-content-center">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h4 class="title title-up">Payment Receipt</h4>
          </div>
          <div class="modal-body">
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default">Nice Button</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!--  End Modal -->
  </div>
</template>

<script>
export default {
  layout: "portal",
  data(){
    return {
      competition: {}
    }
  },
  async beforeCreate(){
    console.log()
    this.$axios.get('/competitions/'+this.$route.params.id).then((resp) => {
      this.competition = resp.data.data
    }).catch((e) => {
      this.$router.push('/404')
    })
  }
};
</script>


