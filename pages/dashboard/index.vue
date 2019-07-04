<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Province / City</th>
          <th>Start Date - End Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(comp,i) in competitions" :key="comp.id">
          <td>{{i+1}}</td>
          <td>{{comp.name}}</td>
          <td>{{comp.city.province}} / {{comp.city.city}}</td>
          <td>{{comp.start_date}} - {{comp.end_date}}</td>
          <td :class="(comp.status=='Pending')?'text-warning':(comp.status=='Confirmed')?'text-success':'text-danger'">{{comp.status}}</td>
          <td>
            <template v-if="user.id != 1">
              <nuxt-link
                class="btn-sm btn-success"
                :to="{path:'/dashboard/competition/'+comp.id}"
              >Detail</nuxt-link>
            </template>
            <template v-else> 
              <button
                @click="getCompetition(comp.id)"
                class="btn-sm btn-success"
                data-target="#validateCompetition"
                data-toggle="modal"
              >validate</button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <dashboardModal :idModal="'validateCompetition'" :title="'Validate Competition'">
      <template v-slot:default>
        <div class="col-md-12 px-0">
          <div class="col-md-12 px-0">
            <div class="form-group">
              <span>Name</span>:
              <span class="font-weight-bold">{{competition.name}}</span>
            </div>
          </div>
          <div class="col-md-12 px-0">
            <div class="form-group">
              <span>Province / City</span>:
              <span class="font-weight-bold">{{competition.city.province}} / {{competition.city.city}}</span>
            </div>
          </div>
          <div class="col-md-12 px-0">
            <div class="form-group">
              <span>Start Date - End Date</span>:
              <span class="font-weight-bold">{{competition.start_date}} - {{competition.end_date}}</span>
            </div>
          </div>
          <div class="col-md-12 px-0">
            <div class="form-group">
              <span>Registration | Payment</span>:
              <span class="font-weight-bold">{{competition.registration_due_date}} | {{competition.payment_due_date}}</span>
            </div>
          </div>
          <div class="col-md-12 px-0">
            <div class="form-group">
              <span>Price</span>:
              <span class="font-weight-bold">{{competition.price}}</span>
            </div>
          </div>
          <div class="col-md-12 px-0">
            <div class="form-group">
              <span>Address</span>:
              <span class="font-weight-bold">{{competition.address}}</span>
            </div>
          </div>
          <div class="col-md-12 px-0">
            <div class="form-group">
              <span>Description</span>:
              <span class="font-weight-bold">{{competition.description}}</span>
            </div>
          </div>
          <div class="col-md-12 px-0">
            <div class="form-group">
              <span>Created By</span>:
              <span class="font-weight-bold">{{competition.createdBy.name}}</span>
            </div>
          </div>
          <div class="col-md-12 justify-content-center px-0">
            <table class="table table-stripped table-bordered">
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Quota</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="detail in competition.competitionDetails" :key="detail.id">
                  <td>{{detail.category.name}}</td>
                  <td>{{detail.quota}}</td>
                </tr>`
              </tbody>
            </table>
          </div>
          <div class="col-md-12 justify-content-center px-0">
            <table class="table table-stripped table-bordered">
              <thead>`
                <tr>
                  <th>Document</th>
                  <th>Url</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="upload in competition.competitionUploads" :key="upload.id">
                  <td>Type</td>
                  <td><a :href="storageApi+upload.url">download</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-success" @click="competitionValidate(true)">Accept</button>
        <button type="button" class="btn-sm btn-danger" @click="competitionValidate(false)">Reject</button>
      </template>
    </dashboardModal>
  </div>
</template>

<script>
import dashboardModal from "../../components/dashboardModal";
export default {
  components: {
    dashboardModal
  },
  data() {
    return {
      competitions: [],
      competition: {
        city:{},
        competitionDetails: [
          {category:{}}
        ],
        competitionUploads: [],
        createdBy: {}
      }
    };
  },
  computed:{
    getUploads(){
      return _.filter(this.competition.competitionUploads,{'type':'pdf'})
    }
  },
  methods:{
    getCompetition(id){
      this.competition = [];
      this.$axios.get('/competitions'+id,{params:{load: "competitionDetails.category,competitionUploads,createdBy"}}).then((resp) =>{

        this.competition = resp.data.data;
      })
    },
    competitionValidate(boolean){
      let data = {};
      if(boolean)
        data.status = "Confirmed"
      else
        data.status = "Rejected"

      this.$axios.put('/competitions/'+this.competition.id,data).then((resp) =>
        this.$toast.success("validation Complete")
      ).catch((e) => {
        this.$toast.error("Something wrong !!");
        console.log(e.response.data.errors)
      }
      )
    }
  },
  async created() {
    if (this.user.id != 1) {
      this.$axios
        .get("/competitions", {
          params: { createdBy: this.user.id, load: "city" }
        })
        .then(resp => {
          this.competitions = resp.data.data;
        });
    } else {
      this.$axios
        .get("/competitions", {
          params: {
            load:
              "city",
              orderByDate: 'desc'
          }
        })
        .then(resp => {
          this.competitions = resp.data.data;
        });
    }
  },
  mounted() {
    var minimalData = {
      teams: [
        ["Team 1", "Team 2"] /* first matchup */,
        ["Team 3", "Team 4"] /* second matchup */
      ],
      results: [
        [[1, 2], [3, 4]] /* first round */,
        [[4, 6], [2, 1]] /* second round */
      ]
    };

    $(function() {
      $("#minimal .demo").bracket({
        init: minimalData /* data to initialize the bracket with */
      });
    });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
