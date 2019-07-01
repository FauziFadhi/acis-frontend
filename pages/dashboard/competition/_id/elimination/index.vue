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
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6 px-0">
              <div class="col-md px-0 text-center">
                <h6>{{match.participant_1.user.name}}</h6>
              </div>
              <div class="col-md px-0 text-center">
                <h3>{{getTotalPoint[0]}}</h3>
              </div>
              <table class="table-striped table">
                <thead>
                  <tr>
                    <th rowspan="2" class="align-middle">Round</th>
                    <th colspan="3" class="text-center">Arrow</th>
                    <th class="align-middle" rowspan="2">Total</th>
                  </tr>
                  <tr>
                    <th v-for="i in 3" :key="i" class="text-center">{{i}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 5" :key="i">
                    <td>{{i}}</td>
                    <template v-if="match.scores[i-1]">
                      <td v-for="j in 3" :key="j" class="text-center">
                        <input
                          readonly
                          type="text"
                          name
                          size="2"
                          :value="match.scores[i-1].score_details[j-1].score_1"
                        />
                      </td>
                      <td>
                        {{getTotalScore(match.scores[i-1].score_details,'score_1')}}
                        <!-- <button
                          class="btn-sm btn-info"
                        >Edit</button> -->
                      </td>
                    </template>
                    <template v-else>
                      <td v-for="j in 3" :key="j">
                        <input
                          @input="score(i-1,j-1)"
                          maxlength="2"
                          type="text"
                          v-model="round[i-1].scores1[j-1]"
                          name
                          size="2"
                        />
                      </td>
                      <td>
                        {{totalRound1[i-1]}}
                      </td>
                    </template>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6 px-0">
              <div class="col-md px-0 text-center">
                <h6>{{match.participant_2.user.name}}</h6>
              </div>
              <div class="col-md px-0 text-center">
                <h3>{{getTotalPoint[1]}}</h3>
              </div>
              <table class="table-striped table">
                <thead>
                  <tr>
                    <th colspan="3" class="text-center">Arrow</th>
                    <th class="align-middle" rowspan="2">Total</th>
                  </tr>
                  <tr>
                    <th v-for="i in 3" :key="i" class="text-center">{{i}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 5" :key="i">
                    <template v-if="match.scores[i-1]">
                      <td v-for="j in 3" :key="j" class="text-center">
                        <input
                          readonly
                          type="text"
                          name
                          size="2"
                          :value="match.scores[i-1].score_details[j-1].score_2"
                        />
                      </td>
                      <td>
                        {{getTotalScore(match.scores[i-1].score_details,'score_2')}}
                        <!-- <button
                          class="btn-sm btn-info"
                        >Edit</button> -->
                      </td>
                    </template>
                    <template v-else>
                      <td v-for="j in 3" :key="j">
                        <input
                          @input="score2(i-1,j-1)"
                          maxlength="2"
                          type="text"
                          v-model="round[i-1].scores2[j-1]"
                          name
                          size="2"
                        />
                      </td>
                      <td>
                        {{totalRound2[i-1]}}
                        <button class="btn-sm py-0 m-0 btn-success" @click="submit(i)">Go</button>
                      </td>
                    </template>
                  </tr>
                </tbody>
              </table>
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
        participant_1: {
          user: {
            name: null
          }
        },
        scores: [],
        participant_2: {
          user: {
            name: null
          }
        }
      },
      totalRound1: [],
      totalRound2: [],
      round: [
        {
          scores1: [],
          scores2: []
        },
        {
          scores1: [],
          scores2: []
        },
        {
          scores1: [],
          scores2: []
        },
        {
          scores1: [],
          scores2: []
        },
        {
          scores1: [],
          scores2: []
        }
      ],
      angka1: [],
      angka2: []
    };
  },
  methods: {
    submit(round){
      let data = {
        score_1: this.round[round-1].scores1,
        score_2: this.round[round-1].scores2,
        round: round
      }
      this.$axios.put('eliminations/'+this.match.id,data).then((resp) => {
        this.$toast.success("berhasil update score")
      }).catch((e) => {
        this.$toast.error("Something wrong!!")
      })
    },
    getTotalScore(data, prop) {
      return _.sumBy(data, function(o){
        if(o[prop] == "m"){
          return 0
        }else if(o[prop] == "x" )
          return 10
        else
          return parseInt(o[prop])
      });
    },
    getMatch(data) {
      $("#matchCallback").click();
      this.match = data.match;
    },
    score(i, j) {
      let str1 = this.round[i].scores1[j];
      if (typeof str1 != "number" || str1!=null) {
        if (str1.toLowerCase() == "m") this.angka1[j] = 0;
        else if (str1.toLowerCase() == "x") this.angka1[j] = 10;
        else this.angka1[j] = parseInt(str1);
      } else {
        this.angka1[j] = parseInt(str1, 10);
      }
      this.totalRound1[i] = _.sum(this.angka1);
      
      // if (typeof str2 != "number" || str2!=[]) {
      //   if (str2.toLowerCase() == "m") this.angka2[j] = 0;
      //   else if (str2.toLowerCase() == "x") this.angka2[j] = 10;
      //   else this.angka2[j] = parseInt(str2);
      // } else {
      //   this.angka2[j] = parseInt(str2, 10);
      // }
      // this.totalRound2[i] = _.sum(this.angka2);
    },
    score2(i, j) {
      let str2 = this.round[i].scores2[j];
      if (typeof str2 != "number" || str2!=null) {
        if (str2.toLowerCase() == "m") this.angka2[j] = 0;
        else if (str2.toLowerCase() == "x") this.angka2[j] = 10;
        else this.angka2[j] = parseInt(str2);
      } else {
        this.angka2[j] = parseInt(str2, 10);
      }
      this.totalRound2[i] = _.sum(this.angka2);
    }
  },
  computed: {
    getTotalPoint() {
      let point1 = _.sumBy(this.match.scores, "point_1");
      let point2 = _.sumBy(this.match.scores, "point_2");

      return [point1, point2];
    }
  },
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
        $("div#big .demo").bracket({
          teamWidth: 200,
          init: matchData,
          onMatchClick: this.getMatch

          // decorator: { edit: edit_fn, render: render_fn }
        });
      });

    function edit_fn(container, data, doneCb) {}
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
