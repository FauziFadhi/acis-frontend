<template>
  <div class="col-md-12 px-0">
    <div class="col-md-12 px-0">
      <Chart v-if="loaded" class="col-md" :height="80" :data="data" :options="options" />
    </div>
    <div class="col-md-12 px-0">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <b-form-group>
              <v-select
                style="max-height:300px;"
                v-model="scorers"
                multiple
                :closeOnSelect="false"
                height="50"
                hide-selected
                max-height="200px"
                placeholder="Type Here for search"
                :options="users"
                label="name"
              ></v-select>
            </b-form-group>
          </div>
          <div class="col-md-12">
            <table class="table table-striped table-responsive-md table-bordered">
              <thead>
                <tr>
                  <th>Name Scorer</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="scorer in scorers" :key="scorer.id">
                  <td class="text-truncate">
                    {{scorer.name}}
                    <span class="btn-sm btn-danger" @click="removeName">x</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <button @click="updateCompetition" class="btn-sm btn-success mb-2">Update</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col-md-12 px-0">
      <div class="row">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <label class="col-sm control label">Name</label>
                <div class="col-sm-10">
                  <input type="text" v-model="competition.name" class="form-control">
                  <span v-if="errors.name" class="text-danger">{{errors.name[0]}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card">
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <td>NO</td>
                    <td>Name</td>
                    <td>Quota</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>



<script>
import Chart from "~/components/Chart";
export default {
  data() {
    return {
      loaded: false,
      users: [],
      scorers: [],
      competition: {
        name: null
      },
      setCompetition: {},
      data: {
        labels: [],
        datasets: [
          {
            label: "Registered",
            backgroundColor: "green",
            data: []
          },
          {
            label: "Slot Available",
            backgroundColor: "red",
            data: []
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    };
  },
  methods: {
    removeName(i) {
      this.scorers.splice(i, 1);
    },
    updateCompetition(){
      this.setCompetition.scorers = _.map(this.scorers,'id');
      this.setCompetition.status = this.competition.status;
      this.$axios.put('/competitions/'+this.$route.params.id,this.setCompetition).then((resp) => {
        this.$toast.success('Success to update data');
      }).catch((e) => {
        console.log(e.response.data.errors)
        this.$toast.error("something wrong about your data")
      })
    }
  },
  computed: {
    
  },
  created() {
    this.$axios
      .get("/competitions/" + this.$route.params.id, {
        params: { load: "competitionDetails.category,scorers" }
      })
      .then(resp => {
        let labels = this.data.labels;
        let dataset = this.data.datasets;
        this.competition = resp.data.data;
        this.scorers = this.competition.scorers;

        _.map(this.competition.competitionDetails, function(comp) {
          labels.push(comp.category.name);
          dataset[0].data.push(comp.registered);
          dataset[1].data.push(comp.available);
        });
        this.data.labels = labels;
        this.loaded = true;
      });
  },
  asyncData({ app }) {
    return app.$axios
      .get("/users")
      .then(resp => {
        return { users: resp.data };
      })
      .catch(e => {
        this.errors.response.data.errors;
      });
  },
  components: {
    Chart
  }
};
</script>

<style>
</style>
