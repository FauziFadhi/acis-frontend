<template>
  <div class="card card-danger">
    <div class="card-header d-flex p-0 d-block">
      <h3 class="card-title p-3">Category</h3>
      <ul class="nav nav-pills ml-auto p-2">
        <li
          class="nav-item"
          v-for="(details,index) in competition.competitionDetails"
          :key="details.category.id"
        >
          <a
            class="nav-link"
            :class="index==0?'active':''"
            :href="'#qualification_'+index"
            data-toggle="tab"
            @click="orderByTotal(details)"
          >{{details.category.name}}</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <!-- Tab panes -->
      <!-- TODO: dont forget to change id title and body -->
      <div class="tab-content">
        <template v-for="(detail,index) in competition.competitionDetails">
          <div
            class="tab-pane"
            :id="'qualification_'+index"
            :key="detail.category.id"
            role="tabpanel"
            :class="index==0?'active show':''"
          >
            <nuxt-link
              :to="{name: 'print-qualification',params: {participants:participants,category:detail.category.name}}"
              class="btn btn-secondary mb-2"
            >print</nuxt-link>

            <table class="table-striped table table-responsive-md text-center">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Total</th>
                  <th>X+10</th>
                  <th>X</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(participant,i) in participants"
                  @click="openQualificationModal(participant)"
                  :key="participant.id"
                  :data-id="participant.id"
                  data-target="#qualificationScore"
                  data-toggle="modal"
                >
                  <td>{{i+1}}</td>
                  <td>{{participant.user.name}}</td>
                  <td>{{participant.totalScore}}</td>
                  <td>{{participant.totalsx10}}</td>
                  <td>{{participant.totalsx}}</td>
                </tr>
              </tbody>
            </table>
            <div class="form-group">
              <span>Generate Bracket:</span>
              <input v-model="generate.size" maxlength="3" placeholder="Size Bracket" />
              <button @click="generateBracket(detail.id)" class="btn-sm btn-danger">Generate</button>
            </div>
          </div>
        </template>
      </div>
    </div>
    <dashboardModal
      ref="qualificationScore"
      :idModal="'qualificationScore'"
      :title="'Qualification Score'"
    >
      <template v-slot:default v-if="participant != {} || participant != null">
        <div class="form-group">
          <span>Participant Name:</span>
          <span class="font-weight-bold">{{participant.user.name}}</span>
        </div>
        <table class="table table-stripped table-bordered table-responsive-md">
          <thead>
            <tr>
              <td rowspan="2" class="align-middle">Round</td>
              <td colspan="6" class="text-center">Arrow</td>
              <td rowspan="2" class="align-middle">Total</td>
            </tr>
            <tr>
              <td v-for="i in 6" :key="i">#{{i}}</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 6" :key="i">
              <td>{{i}}</td>
              <template v-if="participant.qualifications[i-1]">
                <td v-for="j in 6" :key="j">
                  <input
                    readonly
                    type="text"
                    name
                    size="2"
                    :value="participant.qualifications[i-1].scores[j-1].score"
                  />
                </td>
                <td>
                  {{participant.qualifications[i-1].total}}
                  <button class="btn-sm btn-info">Edit</button>
                </td>
              </template>
              <template v-else>
                <td v-for="j in 6" :key="j">
                  <select
                    class="form-control"
                    @change="score(i-1,j-1)"
                    v-model="round[i-1].scores[j-1]"
                  >
                    <option selected disabled value></option>
                    <template v-for="scoreA in $store.state.auth.score">
                      <option :value="scoreA" :key="scoreA">{{scoreA}}</option>
                    </template>
                  </select>
                </td>
                <td>
                  {{totalRound[i-1]}}
                  <button
                    class="btn-sm btn-success"
                    @click="submit(i)"
                    data-dismiss="modal"
                  >Go</button>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </template>
    </dashboardModal>
  </div>
</template>

<script>
import dashboardModal from "../../../../components/dashboardModal";
export default {
  components: {
    dashboardModal
  },
  data() {
    return {
      generate: {
        competition_detail_id: null,
        size: null
      },
      round: [
        {
          scores: []
        },
        {
          scores: []
        },
        {
          scores: []
        },
        {
          scores: []
        },
        {
          scores: []
        },
        {
          scores: []
        }
      ],
      competition: {},
      participant: {
        user: {},
        qualifications: []
      },
      totalRound: [],
      participants: [],
      angka: []
    };
  },
  methods: {
    generateBracket(detailId) {
      this.generate.competition_detail_id = detailId;
      this.$axios
        .get("/generate-bracket", {
          params: {
            competition_detail_id: this.generate.competition_detail_id,
            size: this.generate.size
          }
        })
        .then(resp => {
          this.$axios.post("/eliminations", resp.data).then(resp => {
            this.$toast.success("success generate elimination bracket");
          });
        });
    },
    submit(ronde) {
      let scores = this.round[ronde - 1].scores;
      let qualification = {
        participant_id: this.participant.id,
        round: ronde,
        scores: scores
      };
      this.$axios
        .post("/qualifications", qualification)
        .then(resp => {
          this.$toast.success("Success update data");
        })
        .catch(e => {
          this.$toast.error("something wrong !!");
          console.log(e.response.data.errors);
        });
    },
    score(i, j) {
      let str = this.round[i].scores[j];
      if (typeof str != "number") {
        if (str.toLowerCase() == "m") this.angka[j] = 0;
        else if (str.toLowerCase() == "x") this.angka[j] = 10;
        else this.angka[j] = parseInt(str);
      } else {
        this.angka[j] = parseInt(str, 10);
      }

      this.totalRound[i] = _.sum(this.angka);
    },
    orderByTotal(detail) {
      console.log(detail.participants);
      this.participants = _.filter(detail.participants, {
        status: "Confirmed"
      });
    },
    openQualificationModal(id) {
      let d = new Date();
      let d1 = new Date();
      d.setDate(d.getDate() - 1);
      if (
        d1 < new Date(this.competition.start_date) ||
        d > new Date(this.competition.end_date)
      ) {
        this.$refs.qualificationScore.$el.id = "gg";

        return this.$toast.error("cant update score for now");
      }
      this.participant = id;
      this.round = [
        {
          scores: []
        },
        {
          scores: []
        },
        {
          scores: []
        },
        {
          scores: []
        },
        {
          scores: []
        },
        {
          scores: []
        }
      ];
      this.totalRound = [];
      this.angka = [];
    }
  },

  mounted() {
    console.log(this.$store.state)
    this.competition = this.$store.state.competition.getCompetition
    // this.$axios
    //   .get("/competitions/" + this.$route.params.id, {
    //     params: {
    //       load: "competitionDetails.category,competitionDetails.participants"
    //     }
    //   })
    //   .then(resp => {
    //     this.competition = resp.data.data;
    //   })
    //   .catch(e => {
    //     // this.$router.push('/404')
    //   });
  },
  fetch ({ store, params, app }) {
    return app.$axios.get("/competitions/" + params.id, {
        params: {
          load: "competitionDetails.category,competitionDetails.participants"
        }
      })
    .then((res) => {
      store.commit('competition/setCompetition', res.data.data)
    })
  }
};
</script>

<style>
</style>
