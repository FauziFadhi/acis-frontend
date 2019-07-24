<template>
  <div class="section">
    <div class="container">
      <h3 class="title text-center">My Data</h3>
      <div class="col-md-12 px-0">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <div class="col-md-4 px-0">
                <span>Name</span>:
              </div>
              <div class="col-md-8">
                <span class="font-weight-bold">{{user.name}}</span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-4 px-0">
                <span>Email</span>:
              </div>
              <div class="col-md-8">
                <span class="font-weight-bold">{{user.email}}</span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-4 px-0">
                <span>Gender</span>:
              </div>
              <div class="col-md-8">
                <span class="font-weight-bold">{{user.gender}}</span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-4 px-0">
                <span>Province / City</span>:
              </div>
              <div class="col-md-8">
                <span class="font-weight-bold">{{user.city.province}} / {{user.city.city}}</span>
              </div>
            </div>
            <button @click="updateData" class="btn-sm btn-success">Update</button>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <div class="col-md-4">
                <span>Password</span>
              </div>
              <div class="col-md-8">
                <input type="password" v-model="selected.password">
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-4">
                <span>Team</span>
              </div>
              <div class="col-md-8">
                <input type="text" value="user.team" v-model="selected.team">
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-4">
                <span>Birth Date</span>
              </div>
              <div class="col-md-8">
                <vuejs-datepicker value="user.birth_date" v-model="birth_date"></vuejs-datepicker>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-4">
                <span>Phone</span>
              </div>
              <div class="col-md-8">
                <input type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' value="user.phone" v-model="selected.phone">
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-4">
                <span>Address</span>
              </div>
              <div class="col-md-8">
                <textarea type="text" value="user.address" v-model="selected.address"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto">
          <h4 class="title text-center">My Tournament</h4>
          <div class="nav-align-center">
            <ul class="nav nav-pills nav-pills-primary" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#competition" role="tablist">
                  <i class="now-ui-icons design_image"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#payment" role="tablist">
                  <i class="now-ui-icons location_world"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Tab panes -->
        <div class="tab-content gallery">
          <div class="tab-pane active" id="competition" role="tabpanel">
            <div class="col-md-10 ml-auto mr-auto">
              <div class="row collections">
                <!-- <template v-for="comp in competition">
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
                                </div>
                                <div
                                  class="ml-auto text-secondary"
                                  style="height=30px;"
                                >{{comp.city.city}}, {{comp.city.province}} | {{d= new Date(comp.start_date).toDateString()}}</div>
                              </div>
                            </div>
                            <div class="col-md-2 order-first p-0">
                              <img src="#">
                            </div>
                          </div>
                        </div>
                      </div>
                    </template> -->
              </div>
            </div>
          </div>
          <div class="tab-pane" id="payment" role="tabpanel">
            <div class="col-md-10 ml-auto mr-auto">
              <div class="row collections">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment-timezone";

export default {
  layout: "portal",
  data() {
    return {
      selected: {},
      birth_date : null,
      competition: {},
      loggedUser: null
    };
  },
  methods:{
    updateData(){
      this.selected.birth_date = moment(this.birth_date).tz("Asia/Jakarta").format("YYYY/MM/DD")
      this.$axios.put('/user-update/'+this.user.id,this.selected).then((resp) => {
        this.$toast.success("success to update data");
        this.$router.push('/')
      }).catch((e) => console.log(e.response.data.errors))
    }
  },
  created(){
    // this.selected = this.user
    if(this.user == null)
      this.$router.push('/login')

       this.$axios.get('/participants',{params: {load: 'competitionDetail.competition,paymentReceipts', userId: this.user.id}}).then((resp) =>
    {
      this.loggedUser = resp.data.data
    })
  },
  // asyncData({app, store}){
  //   return app.$axios.get('/participants',{params: {load: 'competitionDetail.competition,paymentReceipts', userId: store.$auth.$state.user.id}}).then((resp) =>
  //   {
  //     return {loggedUser: resp.data.data}
  //   })
  // }
};
</script>

<style>
</style>
