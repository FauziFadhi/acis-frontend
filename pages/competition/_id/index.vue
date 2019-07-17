<template>
  <div class="main">
    <div class="section pb-0" id="TournamentName">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <div class="row px-4">
              <div class="mr-auto">
                <p class="category">
                  {{competition.name}}
                  <button
                    @click="validateLoggedIn"
                    data-target="#register"
                    data-toggle="modal"
                    class="btn-lg btn-success text-white"
                  >Register</button>
                  <br>
                  <span class="text-danger ml-3">
                    Last date:
                    {{competition.registration_due_date}}
                  </span>
                </p>
              </div>
                <p>
                  <!-- <span class="font-weight-bold">Payment Status:</span> -->
                  <span class="font-weight-bold">Payment Upload:</span>
                  <span>&nbsp; &nbsp;</span>
                  <button
                    data-target="#paymentReceipt"
                    data-toggle="modal"
                    @click="validateLoggedIn"
                    class="btn-lg btn-info"
                  >Upload</button>
                  <br>
                  <span class="text-danger font-weight-bold ml-3">
                    Last date:
                    {{competition.payment_due_date}} / {{price}}
                  </span>
                  <br>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- carrousel -->
    <div class="section pt-2" id="carousel">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <!-- image carrousel -->
                <div class="carousel-item active">
                  <img class="d-block" src="/archery.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Nature, United States</h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block" src="/login.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Somewhere Beyond, United States</h5>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <i class="now-ui-icons arrows-1_minimal-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <i class="now-ui-icons arrows-1_minimal-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="QuotaList">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <p class="category">Quota Participant</p>
            <!-- Nav tabs -->
            <div class="card">
              <Chart v-if="loaded" class="col-md" :height="80" :data="data" :options="options"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section" id="participantList">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <p class="category">Participant List</p>
            <div class="card">
              <ul
                class="nav nav-tabs nav-tabs-neutral justify-content-center"
                role="tablist"
                data-background-color="orange"
              >
                <li
                  class="nav-item"
                  v-for="detail in competition.competitionDetails"
                  :key="detail.id"
                >
                  <a
                    class="nav-link active text-black-50"
                    data-toggle="tab"
                    href="#home1"
                    role="tab"
                  >{{detail.category.name}}</a>
                </li>
              </ul>
              <div class="card-body">
                <div class="tab-content text-center">
                  <div class="tab-pane active" id="home1" role="tabpanel">
                    <table class="table-striped table">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Team</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Fauzi Fadhillah</td>
                          <td>BACS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="section" id="qualificationList">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <p class="category">Qualification</p>
            <!-- Nav tabs -->
            <div class="card">
              <ul
                class="nav nav-tabs nav-tabs-neutral justify-content-center"
                role="tablist"
                data-background-color="orange"
              >
                <li
                  class="nav-item"
                  v-for="(detail,index) in competition.competitionDetails"
                  :key="detail.id"
                >
                  <a
                    class="nav-link text-black-50"
                    :class="index==0?'active show':''"
                    data-toggle="tab"
                    :href="'#qualification_'+index"
                    role="tab"
                  >{{detail.category.name}}</a>
                </li>
              </ul>
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
                    <table class="table-striped table table-responsive">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Nama</th>
                          <th>Total</th>
                          <th>X+10</th>
                          <th>X</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(participant,i) in orderByTotal(detail)"
                          @click="openQualificationModal(participant.id)"
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="elimination">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto">
            <p class="category">Elimination</p>
            <!-- Nav tabs -->
            <div class="card">
              <ul
                class="nav nav-tabs nav-tabs-neutral justify-content-center"
                role="tablist"
                data-background-color="orange"
              >
                <li
                  class="nav-item"
                  v-for="(detail,index) in competition.competitionDetails"
                  :key="detail.id"
                >
                  <a
                    class="nav-link text-black-50"
                    :class="index==0?'active show':''"
                    data-toggle="tab"
                    :href="'#elimination_'+index"
                    role="tab"
                  >{{detail.category.name}}</a>
                </li>
              </ul>
              <div class="card-body">
                <!-- Tab panes -->
                <div class="tab-content text-center">
                  <!-- <div class="tab-pane" role="tabpanel" :id="'elimination_'+index" :class="index==0?'active show':''">
                      {{index}}
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sart Modal -->
    <modal
      :idModal="'paymentReceipt'"
      :title="'Payment Receipt Upload'"
      :bClick="upload"
      :bTitle="'Upload'"
    >
      <div class="form-group">
        <span>Participant Name and Category</span>
        <select v-model="modelParticipant" class="form-control">
          <template v-if="paymentParticipantList.length != 0">
            <option
              v-for="(participant,i) in paymentParticipantList"
              :key="i"
              :value="participant"
              :selected="(i==0)?true:false"
            >{{participant.user.name}} || {{participant.competitionDetail.category.name}}</option>
          </template>
          <template v-else>
            <option selected disabled value>No Data</option>
          </template>
        </select>
      </div>
      <div class="form-group">
        <table class="table table-stripped table-responsive">
          <thead>
            <tr>
              <td>Name</td>
              <td>Category</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <template v-if="paymentParticipant != null">
              <tr v-for="participant in paymentParticipant" :key="participant.id">
                <template v-if="participant">
                  <td>{{participant.user.name}}</td>
                  <td>{{participant.competitionDetail.category.name}}</td>
                  <td>
                    <button class="btn-sm btn-danger" @click="removeParticipant(participant)">x</button>
                  </td>
                </template>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div class="form-group">
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()">
        <br>
        <span v-if="errors.file" class="text-danger">{{errors.file[0]}}</span>
      </div>
    </modal>
    <modal
      :idModal="'qualificationScore'"
      :title="'Qualification Score'"
      :bClick="register"
      :bTitle="'Update'"
    >
      <div class="form-group">
        <span>Participant Name and Category</span>
        <select v-model="registerCompId" class="form-control">
          <option
            v-for="details in competition.competitionDetails"
            :key="details.category.id"
            :value="details.id"
          >{{details.category.name}}</option>
        </select>
      </div>
    </modal>
    <!--  End Modal -->
    <!-- Sart Modal -->
    <modal
      :idModal="'register'"
      :title="'Register Category'"
      :bClick="register"
      :bTitle="'Register'"
      ref="registerModal"
    >
      <div class="form-group">
        <span>Category</span>
        <select v-model="registerCompId" class="form-control">
          <option
            v-for="details in competition.competitionDetails"
            :key="details.category.id"
            :value="details.id"
          >{{details.category.name}}</option>
        </select>
      </div>
    </modal>
    <!--  End Modal -->
  </div>
</template>

<script>
import Chart from "../../../components/Chart";
import modal from "../../../components/modal";
export default {
  layout: "portal",
  components: {
    Chart,
    modal
  },
  watch: {
    modelParticipant: function(val) {
      if (val != undefined) {
        this.paymentParticipant.push(val);
        for (var i = 0; i < this.paymentParticipantList.length; i++) {
          if (this.paymentParticipantList[i] === this.modelParticipant) {
            this.paymentParticipantList.splice(i, 1);
          }
        }
      }
    },
    competition: function(val){
      this.currencyFormatted(val.price)
    }
  },
  methods: {
    validateLoggedIn() {
      if (this.user == null) {
        setTimeout(() => {
          this.$router.push("/login");
        }, 500);
        this.$refs.registerModal.$el.id = "gg";
        this.$refs.paymentReceipt.$el.id = "gg";
        this.$toast.error("you have to logged in first");
      }
    },
    upload() {
      let d = new Date();

      if(d> new Date(this.competition.payment_due_date))
        return this.$toast.error("your payment is late for this tournament")

      let data = new FormData();
      data.append(
        "receipt_date",
        d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
      );
      data.append("file", this.file);
      for (let i = 0; i < this.paymentParticipant.length; i++) {
        data.append("participants[" + i + "]", this.paymentParticipant[i].id);
      }

      this.$axios
        .post("/payment-receipts", data, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(resp => {
          this.$toast.success("Berhasil Upload Data");
        })
        .catch(e => {
          this.$toast.error("Something Wrong about your data");
          this.errors = e.response.data.errors;
          console.log(e.response.data.errors);
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    removeParticipant: function(participant) {
      this.paymentParticipantList.push(participant);
      for (let i = 0; i < this.paymentParticipant.length; i++) {
        if (this.paymentParticipant[i] === participant) {
          this.paymentParticipant.splice(i, 1);
        }
      }
    },
    openQualificationModal(id) {
      this.participantId = id;
    },
    orderByTotal(detail) {
      return _.orderBy(
        _.filter(detail.participants, { status: "Confirmed" }),
        ["totalScore", "totalsx10", "totalsx"],
        ["desc", "desc", "desc"]
      );
    },
    register() {
      if(new Date() > new Date(this.competition.registration_due_date))
        return this.$toast.error("you are late to join this tournament")

      this.$axios
        .post("/participants", {
          competition_detail_id: this.registerCompId,
          user_id: this.user.id
        })
        .then(resp => {
          this.$toast.success("Success to Register Category");
        })
        .catch(e => {
          if(e.response.status == 401)
            this.$toast.error(e.response.data.message)
          if (e.response.data.errors.user_id) {
            if (
              e.response.data.errors.user_id[0] ==
              "The user id has already been taken."
            )
              this.$toast.error("You Have been Registered");
          }
        });
    },
    currencyFormatted: function(num) {
      let p = parseInt(num).toFixed(2).split(".");
    this.price = "Rp" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
    }
  },
  data() {
    return {
      file: null,
      paymentParticipant: [],
      modelParticipant: {},
      paymentParticipantList: [],
      participantId: null,
      loaded: false,
      competition: {},
      price: null,
      registerCompId: null,
      errors: {
        file: []
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
      },
      loaded: false
    };
  },
  async beforeCreate() {
    console.log();
    this.$axios
      .get("/competitions/" + this.$route.params.id, {
        params: {
          load: "competitionDetails.category,competitionDetails.participants"
        }
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
      })
      .catch(e => {
        // this.$router.push('/404')
      });
  },
  asyncData({ app, params }) {
    return app.$axios
      .get("/participants", {
        params: {
          load: "competitionDetail.category",
          payment: params.id
        }
      })
      .then(resp => {
        return { paymentParticipantList: resp.data.data };
      })
      .catch(e => {
        this.errors.response.data.errors;
      });
  }
};
</script>


