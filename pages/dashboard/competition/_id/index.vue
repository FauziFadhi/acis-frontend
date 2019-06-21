<template>
  <div class="col-md-12 px-0">
    <div class="col-md-12 px-0">
      <Chart v-if="loaded" class="col-md" :height="80" :data="data" :options="options"/>
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
    </div> -->
  </div>
</template>



<script>
import Chart from "~/components/Chart";
export default {
  data() {
    return {
      loaded: false,
      competition: {
        name: null
      },
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
  mounted() {},
  created() {
    this.$axios
      .get("/competitions/" + this.$route.params.id, {
        params: { load: "competitionDetails.category" }
      })
      .then(resp => {
        let labels = this.data.labels;
        let dataset = this.data.datasets;
        this.competition = resp.data.data;

        _.map(this.competition.competitionDetails, function(comp) {
          labels.push(comp.category.name);
          dataset[0].data.push(comp.registered);
          dataset[1].data.push(comp.available);
        });
        this.data.labels = labels;
        this.loaded = true;
      });
  },
  components: {
    Chart
  }
};
</script>

<style>
</style>
