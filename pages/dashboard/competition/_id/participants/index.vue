<template>
  <div class="row">
    <div class="col-12">
      <!-- Custom Tabs -->
      <div class="card card-danger">
        <div class="card-header d-flex p-0 d-block">
          <h3 class="card-title p-3">Category</h3>
          <ul class="nav nav-pills ml-auto p-2">
            <li class="nav-item" v-for="(details,index) in competition.competitionDetails" :key="details.category.id">
              <a class="nav-link" :class="index==0?'active':''" :href="'#tab_'+index" data-toggle="tab">{{details.category.name}}</a>
            </li>
          </ul>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="tab-content">
            <div class="tab-pane" :class="index==0?'active show':''" :id="'tab_'+index" v-for="(details,index) in competition.competitionDetails" :key="details.category.id">
              <div class="overflow-auto" style="height: 600px; overflow:hidden;">
                <table class="table table-condensed table-stripped">
                  <tbody>
                    <tr>
                      <th style="width: 40px">#</th>
                      <th>Label</th>
                      <th style="width: 40px">action</th>
                    </tr>
                    <template v-if="details.participants.length!=0">
                    <tr v-for="(participant,i) in details.participants" :key="participant.id">
                      <td>{{i+1}}</td>
                      <td>{{participant.user.name}}</td>
                      <td>aaaaaaaaaa</td>
                    </tr>
                    </template>
                    <template v-else>
                      <tr><td colspan="3" class="text-center">No Data</td></tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- /.tab-content -->
        </div>
        <!-- /.card-body -->
      </div>
      <!-- ./card -->
    </div>
    <!-- /.col -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      competition: {},
      participants: [
        {
          id: "1",
          name: "Fauzi Fadhillah",
          club: "BACS"
        }
      ]
    }
  },
  created() {
    this.$axios
      .get("/competitions/" + this.$route.params.id, {
        params: { load: "competitionDetails.category,competitionDetails.participants" }
      })
      .then(resp => {
        this.competition = resp.data.data;
      });
  },
  mounted() {
    console.log(this.$route)
  }
};
</script>

<style>
</style>
