<template>
  <div class="row">
    <div class="col-12">
      <!-- Custom Tabs -->
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
        <!-- /.card-header -->
        <div class="card-body">
          <div class="tab-content">
            <div
              class="tab-pane"
              :class="index==0?'active show':''"
              :id="'tab_'+index"
              v-for="(details,index) in competition.competitionDetails"
              :key="details.category.id"
            >
              <nuxt-link :to="{name: 'print-participants',params: {participants:getConfirmed(details.participants),category:details.category.name}}" class="btn ml-auto btn-secondary mb-2">print</nuxt-link>
              <div class="overflow-auto" style="height: 600px; overflow:hidden;">
                <table class="table table-condensed table-stripped table-responsive-md">
                  <tbody>
                    <tr>
                      <th style="width: 40px">#</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Payment Status</th>
                      <th style="width: 40px">action</th>
                    </tr>
                    <template v-if="details.participants.length!=0">
                      <tr v-for="(participant,i) in details.participants" :key="participant.id">
                        <td class="warning">{{i+1}}</td>
                        <td>{{participant.user.name}}</td>
                        <td><span :class="participant.status=='Pending'?'bg-warning':'bg-success'" class="p-1">{{participant.status}}</span></td>
                        <td><span :class="getPaymentLastStatus(participant.paymentReceipts)=='Pending'?'bg-warning':getPaymentLastStatus(participant.paymentReceipts)=='Accepted'?'bg-success':'bg-danger'" class="p-1">{{getPaymentLastStatus(participant.paymentReceipts)}}</span></td>
                        <td>
                          <button
                            class="btn-sm btn-success"
                            @click="validateClick(participant.id)"
                            data-target="#paymentValidation"
                            data-toggle="modal"
                          >Validate</button>
                        </td>
                      </tr>
                    </template>
                    <template v-else>
                      <tr>
                        <td colspan="5" class="text-center">No Data</td>
                      </tr>
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

    <!-- Sart Modal -->
    <dashboardModal :idModal="'paymentValidation'" :title="'Payment Validation'">
      <template v-slot:default>
        <div class="col-md-12 justify-content-center" v-if="paymentReceipt">
          <div class="row">
            <div class="col-md-4">
              <a href="#">
                <img
                  data-target="#fullimage"
                  data-toggle="modal"
                  :src="storageApi+paymentReceipt.uri"
                  style="max-width:200px; max-height:200px;"
                  alt
                >
              </a>
            </div>
            <div class="col-md-8">
              <table class="table-stripped table table-responsive-md">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(participant,index) in paymentReceipt.participants"
                    :key="participant.id"
                  >
                    <td>{{index+1}}</td>
                    <td>{{participant.user.name}}</td>
                    <td>{{participant.competitionDetail.category.name}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" @click="validatePayment(true)" class="btn-sm btn-success">Accept</button>
        <button type="button" @click="validatePayment(false)" class="btn-sm btn-danger">Reject</button>
      </template>
    </dashboardModal>

    <div
      v-if="paymentReceipt"
      class="modal fade"
      style="z-index:10001"
      id="fullimage"
      role="dialog"
    >
      <div
        class="modal-dialog modal-lg m-0"
        style="max-width:1920px !important; max-height:1080px !important;"
      >
        <div class="modal-content">
          <div class="modal-body">
            <img
              :src="this.storageApi+paymentReceipt.uri"
              style="max-width:100%; max-height:100%;"
              alt="click for fullscreen"
            >
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashboardModal from "../../../../../components/dashboardModal";

export default {
  data() {
    return {
      competition: {},
      participantId: null,
      paymentReceipt: {
        id: 0
      }
    };
  },
  transition: 'test',
  methods: {
    getConfirmed(participants){
      return _.filter(participants,{'status':'Confirmed'})
    },
    validateClick(id) {
      this.participantId = id;
      console.log(this.participantId);
    },
    validatePayment: function(boolean) {
      let data = {
        status: null
      };
      if(boolean) data.status ="Accepted"
      else data.status = "Rejected"

      this.$axios
        .put("/payment-receipts/" + this.paymentReceipt.id, data)
        .then(resp => {
          this.$toast.success("change Status success");
        })
        .catch(e => {
          this.$toast.error("uppss Something wrong about your data");
          console.log(e.response.data.errors);
        });

      console.log(data.status);
    },
    getPaymentLastStatus(status) {
      let data = _.last(status);

      if(data)
      return data.status

      else return "No Payment"
    }
  },
  watch: {
    participantId: function(val) {
      this.$axios
        .get("/payment-receipts", {
          params: {
            load: "participants.competitionDetail.category",
            participantId: val
          }
        })
        .then(resp => {
          this.paymentReceipt = _.last(resp.data.data);
        })
        .catch(e => {
          console.log(e.response.data.errors);
        });
    }
  },
  async created() {
    let {data} = await this.$axios
      .get("/competitions/" + this.$route.params.id, {
        params: {
          load:
            "competitionDetails.category,competitionDetails.participants.paymentReceipts"
        }
      })

      this.competition = data.data;
      console.log(this.competition)
  },
  components: {
    dashboardModal
  }
};
</script>

<style>
.test-enter-active, .test-leave-active {
  transition: opacity .5s;
}
.test-enter, .test-leave-active {
  opacity: 0;
}
</style>
