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
              <div class="card-body px-0" style="overflow-y:auto; max-height:400px;">
                <template v-if="byMonth || byMonth == []">
                  <template v-for="comp in byMonth">
                    <div class="card-body border-bottom px-0" :key="comp.id">
                      <div class="col-md-12 p-0">
                        <div class="row px-4">
                          <div class="col-md">
                            <div class="card-title font-weight-bold mb-1">{{comp.name}}</div>
                            <div class="card-subtitle text-secondary">{{comp.createdBy.name}}</div>
                            <p class="text-justify">{{comp.description}}</p>
                            <div class="d-flex mt-5">
                              <div>
                                <nuxt-link
                                  class="btn-sm btn-secondary"
                                  :to="'competition/'+ comp.id"
                                >Detail</nuxt-link>
                              </div>
                              <div
                                class="ml-auto text-secondary"
                                style="height=30px;"
                              >{{comp.city.city}}, {{comp.city.province}} | {{d= new Date(comp.start_date).toDateString()}}</div>
                            </div>
                          </div>
                          <div class="col-md-2 order-first p-0">
                            <img width="100%" height="170px" :src="storageApi+comp.competitionUploads[1].url">
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
                <template v-else>
                  <div class="card-body p-0 d-flex justify-content-center align-self-center">
                    <div class="d-flex justify-content-center align-self-center">No Data</div>
                  </div>
                </template>
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
                <input type="text" @input="search" v-model="searchText" placeholder="search" class="mr-auto ml-2 text-black">
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
                <template v-if="user != null">
                  <li class="nav-item">
                    <a class="nav-link text-dark" data-toggle="tab" href="#province" role="tab">
                      <i class="now-ui-icons shopping_cart-simple"></i> Province
                    </a>
                  </li>
                </template>
              </ul>
              <div class="card-body p-0">
                <!-- Tab panes -->
                <div class="tab-content" style="overflow-y:auto; max-height:400px;">
                  <div class="tab-pane active" id="nasional" role="tabpanel">
                    <template v-for="comp in competitions">
                      <div class="card-body px-0 border-bottom align-self" :key="comp.id">
                        <div class="col-md-12 p-0">
                          <div class="row px-4">
                            <div class="col-md">
                              <div class="card-title font-weight-bold mb-1">{{comp.name}}</div>
                              <div class="card-subtitle text-secondary">{{comp.createdBy.name}}</div>
                              <p class="text-justify">{{comp.description}}</p>
                              <div class="d-flex mt-5">
                                <div>
                                  <nuxt-link
                                    class="btn-sm btn-secondary"
                                    :to="'competition/'+ comp.id"
                                  >Detail</nuxt-link>
                                  <!-- <nuxt-link class="btn-sm btn-secondary" to="#">Register</nuxt-link> -->
                                </div>
                                <div
                                  class="ml-auto text-secondary"
                                  style="height=30px;"
                                >{{comp.city.city}}, {{comp.city.province}} | {{d= new Date(comp.start_date).toDateString()}}</div>
                              </div>
                            </div>
                            <div class="col-md-2 order-first p-0">
                              <img width="100%" height="170px" :src="storageApi+comp.competitionUploads[1].url">
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                  <template v-if="user != null">
                    <div class="tab-pane" id="province" role="tabpanel">
                      <template v-for="comp in byProvince">
                        <div class="card-body px-0 border-bottom align-self" :key="comp.id">
                          <div class="col-md-12 p-0">
                            <div class="row px-4">
                              <div class="col-md">
                                <div class="card-title font-weight-bold mb-1">{{comp.name}}</div>
                                <div class="card-subtitle text-secondary">{{comp.createdBy.name}}</div>
                                <p class="text-justify">{{comp.description}}</p>
                                <div class="d-flex mt-5">
                                  <div>
                                    <nuxt-link
                                      class="btn-sm btn-secondary"
                                      :to="'competition/'+ comp.id"
                                    >Detail</nuxt-link>
                                    <!-- <nuxt-link class="btn-sm btn-secondary" to="#">Register</nuxt-link> -->
                                  </div>
                                  <div
                                    class="ml-auto text-secondary"
                                    style="height=30px;"
                                  >{{comp.city.city}}, {{comp.city.province}} | {{d= new Date(comp.start_date).toDateString()}}</div>
                                </div>
                              </div>
                              <div class="col-md-2 order-first p-0">
                                <img width="100%" height="170px" :src="storageApi+comp.competitionUploads[1].url">
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </div>
                  </template>
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
  data() {
    return {
      competitions: [],
      competitionSearch: [],
      thisMonth: [],
      test: null,
      searchText: null
    };
  },
  computed: {
    byMonth() {
      return _.filter(this.competitions, function(a) {
        let d = new Date(a.start_date);
        if (
          d.getMonth() == new Date().getMonth() &&
          d.getFullYear() == new Date().getFullYear()
        )
          return a;
      });
    },
    byProvince() {
      let user = this.user
      return _.filter(this.competitions, function(a){
      return a.city.province == user.city.province
    })
    }
  },
  created(){
    this.competitionSearch = this.competitions;
  },
  methods:{
    search(){

      let text = this.searchText;
      if(this.searchText == "")
        this.competitions = this.competitionSearch

      else this.competitions = _.filter(this.competitionSearch, function(a){
          return _.isMatch(a.name,text) || _.isMatch(a.createdBy.name.toLowerCase(),text)
        })
    }
  },
  async asyncData({ app, store }) {
    let id = 0;
    // let byProvince = {
    //   data:{}
    // }
    if (store.$auth.$state.user) {
      id = store.$auth.$state.user.id;
    //   byProvince = await app.$axios
    //   .get("/competitions?load=competitionUploads,createdBy,city&notCreatedBy=" + id, {
    //     params: { province: store.$auth.$state.user.city.province, status: "Confirmed" }
    //   })
    }
    let competitions = await app.$axios
      .get("/competitions?load=competitionUploads,createdBy,city&notCreatedBy=" + id, {
        params: { status: "Confirmed" }
      })
    return {competitions: competitions.data.data}
    // , byProvince: byProvince.data.data
  },
  layout: "portal"
};
</script>


