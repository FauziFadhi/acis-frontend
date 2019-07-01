<template>
  <div class="row">
    <div class="col-md-7">
      <div class="card card-primary" style="overflow:hidden;">
        <div class="card-header">
          <h3 class="card-title">Bracket Elimination</h3>
        </div>
        <div class="card-body overflow-auto" style="height: 720px">
          <div id="big" class="align-middle">
            <div class="demo"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Top 3 Elimination</h3>
        </div>
        <div class="card-body overflow-auto" style="height 500px;">
          <table class="table table-condensed">
            <tbody>
              <tr>
                <th style="width: 10px">#</th>
                <th>Task</th>
                <th>Progress</th>
                <th style="width: 40px">Label</th>
              </tr>
              <tr>
                <td>a</td>
                <td>s</td>
                <td>d</td>
                <td>d</td>
              </tr>
              <tr>
                <td>a</td>
                <td>s</td>
                <td>d</td>
                <td>d</td>
              </tr>
              <tr>
                <td>a</td>
                <td>s</td>
                <td>d</td>
                <td>d</td>
              </tr>
            </tbody>
            <tr></tr>
          </table>
          <button
            id="matchCallback"
            hidden
            data-target="#eliminationScore"
            data-toggle="modal"
          >asdsd</button>
        </div>
      </div>
    </div>
    <dashboardModal :idModal="'eliminationScore'" :title="'Qualification Score'">
      <template v-slot:default>
        <div class="col-md-12 px-0">
          <div class="row">
          <div class="col-md-6 px-0">
          <div class="col-md-6 px-0">
            <div class="col-md px-0">{{match.participant_1.user.name}}</div>
            <div class="col-md px-0"><h3>{{match.total_point_1}}</h3></div>
          </div>
          <div class="col-md-6 px-0">
            <div class="col-md px-0">{{match.participant_2.user.name}}</div>
            <div class="col-md px-0"><h3>{{match.total_point_2}}</h3></div>
          </div>
          <div class="col-md-6 px-0"></div>
          </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </template>
    </dashboardModal>
  </div>
</template>

<script>
import dashboardModal from "../../../../../components/dashboardModal";
export default {
  components: {
    dashboardModal
  },
  data() {
    return {
      match: {
        participant_1:{
          user: {
            name: null
          }
        },
        participant_2:{
          user: {
            name: null
          }
        }
      },
    };
  },
  methods: {},
  mounted() {
    let matchData = {
      teams: null,
      results: null
    };

    this.$axios
      .get("/eliminations", { params: { competition_detail_id: 1 } })
      .then(resp => {
        matchData = resp.data;
        // matchData.results = resp.data.results
        $(function() {
          $("div#big .demo").bracket({
            teamWidth: 200,
            init: matchData,
            onMatchClick: onclick

            // decorator: { edit: edit_fn, render: render_fn }
          });
        });
      });

    function edit_fn(container, data, doneCb) {}

    function onclick(data) {
      $("#matchCallback").click();
      this.match = data;
      console.log(this.match);
    }
    // function render_fn(container, data, score, state) {
    //   switch (state) {
    //     case "entry-no-score":
    //     case "entry-default-win":
    //     case "entry-complete":
    //       // buat nambahin
    //       // container.append("<div class='row'><div class='col-sm-8'>Nama Fauzi</div><div class='col-sm-4'>Nama Club</div></div>").append("");
    //       return;
    //   }
    // }
  }
};
</script>

<style>
card-body {
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  background: rgb(123, 143, 255);
}
</style>
