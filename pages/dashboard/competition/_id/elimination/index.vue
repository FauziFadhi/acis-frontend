<template>
  <div class="card card-danger" style="overflow:hidden;">
    <div class="card-header d-flex p-0 d-block">
      <ul class="nav nav-pills ml-auto p-2">
        <li
          class="nav-item"
          v-for="(details,index) in competition.competitionDetails"
          :key="details.category.id"
        >
          <a
            class="nav-link"
            @click="getBracket(details.id)"
            :class="index==0?'active':''"
            :href="'#tab_'+index"
            data-toggle="tab"
          >{{details.category.name}}</a>
        </li>
      </ul>
    </div>
    <div class="card-body overflow-auto" style="height: 720px">
      <!-- Tab panes -->
      <!-- TODO: dont forget to change id title and body -->
      <div class="tab-content">
        <div
          class="tab-pane"
          :id="'tab_'+index"
          v-for="(detail,index) in competition.competitionDetails"
          :key="detail.id"
          role="tabpanel"
          :class="index==0?'active show':''"
        >
          <nuxt-link
            :to="{name: 'print-elimination',params: {bracketData: bracketData,detailId:detail.id,category:detail.category.name}}"
            class="btn btn-secondary mb-2"
          >print</nuxt-link>
          <div :id="'big'+(detail.id)" class="align-middle">
            <div class="demo"></div>
          </div>
        </div>
      </div>
    </div>
    <button id="matchCallback" hidden data-target="#eliminationScore" data-toggle="modal">asdsd</button>
    <dashboardModal
      ref="eliminationScore"
      :idModal="'eliminationScore'"
      :title="'Elimination Score'"
    >
      <template v-slot:default>
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6 px-0">
              <div class="col-md px-0 text-center">
                <!-- <h6>{{match.participant_1.user.name}}</h6> -->
              </div>
              <div class="col-md px-0 text-center">
                <h3>{{getTotalPoint[0]}}</h3>
              </div>
              <table class="table-striped table table-responsive-md">
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
                        >Edit</button>-->
                      </td>
                    </template>
                    <template v-else>
                      <td v-for="j in 3" :key="j">
                        <select
                          class="form-control"
                          @change="score(i-1,j-1)"
                          v-model="round[i-1].scores1[j-1]"
                        >
                          <option selected disabled value></option>
                          <template v-for="scoreA in $store.state.auth.score">
                            <option :value="scoreA" :key="scoreA">{{scoreA}}</option>
                          </template>
                        </select>
                      </td>
                      <td>{{totalRound1[i-1]}}</td>
                    </template>
                  </tr>
                  <tr v-if="getTotalPoint[0] == 5 && getTotalPoint[1]== 5">
                    <td colspan="4">
                      <input type="text" class="pull-right" v-model="shootOff[0]" placeholder="cm" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6 px-0">
              <div class="col-md px-0 text-center">
                <!-- <h6>{{match.participant_2.user.name}}</h6> -->
              </div>
              <div class="col-md px-0 text-center">
                <h3>{{getTotalPoint[1]}}</h3>
              </div>
              <table class="table-striped table table-responsive-md">
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
                        >Edit</button>-->
                      </td>
                    </template>
                    <template v-else>
                      <td v-for="j in 3" :key="j">
                        <select
                          class="form-control"
                          @change="score2(i-1,j-1)"
                          v-model="round[i-1].scores2[j-1]"
                        >
                          <option selected disabled value></option>
                          <template v-for="scoreA in $store.state.auth.score">
                            <option :value="scoreA" :key="scoreA">{{scoreA}}</option>
                          </template>
                        </select>
                      </td>
                      <td>
                        {{totalRound2[i-1]}}
                        <button
                          data-dismiss="modal"
                          class="btn-sm py-0 m-0 btn-success"
                          @click="submit(i)"
                        >Go</button>
                      </td>
                    </template>
                  </tr>
                  <template v-if="getTotalPoint[0] == 5 && getTotalPoint[1]== 5">
                    <tr>
                      <td colspan="4">
                        <input type="text" v-model="shootOff[1]" placeholder="cm" />
                        <button
                          data-dismiss="modal"
                          @click="postShootOff"
                          class="btn-sm py-0 m-0 btn-success"
                        >Go</button>
                      </td>
                    </tr>
                  </template>
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
      shootOff: [],
      bracketData: {},
      competition: {},
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
    postShootOff() {
      let data = {
        score_1: this.shootOff[0],
        score_2: this.shootOff[1],
        round: 6,
        id: this.match.id
      };
      if (this.match.scores[5])
        this.$axios
          .put("/shoot-off/" + this.match.id, data)
          .then(resp => {
            this.$toast.success("berhasil update shoot Off");
          })
          .catch(resp => {
            this.$toast.error("Something wrong");
          });
      else
        this.$axios
          .post("/shoot-off", data)
          .then(resp => {
            this.$toast.success("berhasil update shoot Off");
          })
          .catch(resp => {
            this.$toast.error("Something wrong");
          });
    },
    getBracket(i) {
      let matchData = {
        teams: null,
        results: null
      };
      this.$axios
        .get("/eliminations", { params: { competition_detail_id: i } })
        .then(resp1 => {
          matchData = resp1.data;
          this.bracketData = resp1.data;
          // matchData.results = resp.data.results
          $("div#big" + i + " .demo").bracket({
            teamWidth: 200,
            init: matchData,
            onMatchClick: this.getMatch
            // decorator: { edit: edit_fn, render: render_fn }
          });
        })
        .catch(e => (this.bracketData = {}));
    },
    submit(round) {
      let data = {
        score_1: this.round[round - 1].scores1,
        score_2: this.round[round - 1].scores2,
        round: round
      };
      this.$axios
        .put("eliminations/" + this.match.id, data)
        .then(resp => {
          this.$toast.success("berhasil update score");
        })
        .catch(e => {
          this.$toast.error("Something wrong!!");
        });
    },
    getTotalScore(data, prop) {
      return _.sumBy(data, function(o) {
        if (o[prop] == "M") {
          return 0;
        } else if (o[prop] == "X") return 10;
        else return parseInt(o[prop]);
      });
    },
    getMatch(data) {
      let d = new Date();
      let d1 = new Date();
      d.setDate(d.getDate() - 1);
      if (
        d1 < new Date(this.competition.start_date) ||
        d > new Date(this.competition.end_date)
      ) {
        return this.$toast.error("cant update score for now");
      }
      $("#matchCallback").click();
      // $(".match").on('click',function(event){
      //   alert($(this).children(".teamContainer .team .label").text())
      // })
      this.match = data.match;
    },
    score(i, j) {
      let str1 = this.round[i].scores1[j];
      if (typeof str1 != "number" || str1 != null) {
        if (str1 == "M") this.angka1[j] = 0;
        else if (str1 == "X") this.angka1[j] = 10;
        else this.angka1[j] = parseInt(str1);
      } else {
        this.angka1[j] = parseInt(str1, 10);
      }
      this.totalRound1[i] = _.sum(this.angka1);
    },
    score2(i, j) {
      let str2 = this.round[i].scores2[j];
      if (typeof str2 != "number" || str2 != null) {
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
      .get("/competitions/" + this.$route.params.id, {
        params: {
          load: "competitionDetails.category"
        }
      })
      .then(resp => {
        this.competition = resp.data.data;
        this.$axios
          .get("/eliminations", {
            params: {
              competition_detail_id: this.competition.competitionDetails[0].id
            }
          })
          .then(resp1 => {
            matchData = resp1.data;
            this.bracketData = resp1.data;
            // matchData.results = resp.data.results
            $(
              "div#big" + this.competition.competitionDetails[0].id + " .demo"
            ).bracket({
              teamWidth: 200,
              init: matchData,
              onMatchClick: this.getMatch

              // decorator: { edit: edit_fn, render: render_fn }
            });
          });
      })
      .catch(e => {
        // this.$router.push('/404')
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
  },
  created() {}
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
