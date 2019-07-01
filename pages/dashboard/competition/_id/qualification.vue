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
            :href="'#tab_'+index"
            data-toggle="tab"
          >{{details.category.name}}</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <!-- Tab panes -->
      <!-- TODO: dont forget to change id title and body -->
      <div class="tab-content text-center">
        <div
          class="tab-pane"
          :id="'qualification_'+index"
          v-for="(detail,index) in competition.competitionDetails"
          :key="detail.id"
          role="tabpanel"
          :class="index==0?'active show':''"
        >
          <table class="table-striped table">
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
                v-for="(participant,i) in orderByTotal(detail)"
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
        </div>
      </div>
    </div>
    <dashboardModal :idModal="'qualificationScore'" :title="'Qualification Score'">
      <template v-slot:default v-if="participant != {} || participant != null">
        <div class="form-group">
          <span>Participant Name:</span>
          <span class="font-weight-bold">{{participant.user.name}}</span>
        </div>
        <table class="table table-stripped table-bordered">
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
                <input readonly type="text" name size="2" :value="participant.qualifications[i-1].scores[j-1].score">
              </td>
              <td>{{participant.qualifications[i-1].total}} <button class="btn-sm btn-info">Edit</button></td>
              </template>
              <template v-else>
              <td v-for="j in 6" :key="j">
                <input @input="score(i-1,j-1)" maxlength="2" type="text" v-model="round[i-1].scores[j-1]" name size="2">
              </td>
              <td>{{totalRound[i-1]}} <button class="btn-sm btn-success" @click="submit(i)">Go</button></td>
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
      round:[{
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
      }],
      competition: {},
      participant: {
        user: {},
        qualifications: []
      },
      totalRound:[],
      angka: []
    };
  },
  methods: {
    submit(ronde){
      let scores = this.round[ronde-1].scores
      let qualification = {
        participant_id : this.participant.id,
        round: ronde,
        scores: scores
      }
      this.$axios.post('/qualifications',qualification).then((resp) => {
        this.$toast.success("Success update data");
      }).catch((e) => {
        this.$toast.error("something wrong !!")
        console.log(e.response.data.errors)
      })
    },
    score(i,j){
      let str = this.round[i].scores[j]
      if(typeof str != 'number'){
        if(str.toLowerCase()=="m")
          this.angka[j]=0;
        else if(str.toLowerCase()=="x")
          this.angka[j]=10;
        else
          this.angka[j]=parseInt(str)
      }
      else{
        this.angka[j]= parseInt(str,10)
      }

      this.totalRound[i] = _.sum(this.angka);
    },
    orderByTotal(detail) {
      return _.filter(detail.participants, { status: "Confirmed" })
    },
    openQualificationModal(id) {
      this.participant = id;
      this.round = [{
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
      }]
      this.totalRound = []
      this.angka = []
    },
  },
  
  created() {
    this.$axios
      .get("/competitions/" + this.$route.params.id, {
        params: {
          load:
            "competitionDetails.category,competitionDetails.participants"
        }
      })
      .then(resp => {
        this.competition = resp.data.data;
      })
      .catch(e => {
        // this.$router.push('/404')
      });
  }
};
</script>

<style>
</style>
