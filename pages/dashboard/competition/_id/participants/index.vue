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
              <div class="overflow-auto" style="height: 600px; overflow:hidden;">
                <table class="table table-condensed table-stripped">
                  <tbody>
                    <tr>
                      <th style="width: 40px">#</th>
                      <th>Label</th>
                      <th>Status</th>
                      <th>Payment Status</th>
                      <th style="width: 40px">action</th>
                    </tr>
                    <template v-if="details.participants.length!=0">
                      <tr v-for="(participant,i) in details.participants" :key="participant.id">
                        <td>{{i+1}}</td>
                        <td>{{participant.user.name}}</td>
                        <td>{{participant.status}}</td>
                        <td>{{getPaymentLastStatus(participant.paymentReceipts).status}}</td>
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
                        <td colspan="3" class="text-center">No Data</td>
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
    <dashboardModal
      :idModal="'paymentValidation'"
      :title="'Payment Validation'"
      :bClick="validation"
      :bTitle="'Validation'"
    >
      <div class="col-md-12 justify-content-center" v-if="paymentReceipt">
        <img
          data-target="#fullimage"
          data-toggle="modal"
          :src="this.storageApi+paymentReceipt[0].uri"
          style="max-width:200px; max-height:200px;"
          alt
        >
      </div>
    </dashboardModal>

  </div>
</template>

<script>
import dashboardModal from "../../../../../components/dashboardModal";

export default {
  data() {
    return {
      competition: {},
      participantId: null,
      paymentReceipt: null
    };
  },
  methods: {
    validateClick(id) {
      this.participantId = id;
      console.log(this.participantId);
    },
    validation() {},
    getPaymentLastStatus(status) {
      return _.last(status);
    }
  },
  watch: {
    participantId: function(val) {
      this.$axios
        .get("/payment-receipts", {
          params: { load: "participants", participantId: val }
        })
        .then(resp => {
          this.paymentReceipt = resp.data.data;
        })
        .catch(e => {
          console.log(e.response.data.errors);
        });
    }
  },
  created() {
    this.$axios
      .get("/competitions/" + this.$route.params.id, {
        params: {
          load:
            "competitionDetails.category,competitionDetails.participants.paymentReceipts"
        }
      })
      .then(resp => {
        this.competition = resp.data.data;
      });
  },
  mounted() {
    console.log(this.$route);
  },
  components: {
    dashboardModal
  }
};
</script>

<style>
.modal-image {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.modal-dialog-image {
  position: fixed;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0;
}

.modal-content-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 2px solid #3c7dcf;
  border-radius: 0;
  box-shadow: none;
}

.modal-header-image {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  padding: 10px;
  background: #6598d9;
  border: 0;
}

.modal-title-image {
  font-weight: 300;
  font-size: 2em;
  color: #fff;
  line-height: 30px;
}

.modal-body-image {
  position: absolute;
  top: 50px;
  bottom: 60px;
  width: 100%;
  font-weight: 300;
  overflow: auto;
}

.modal-footer-image {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 60px;
  padding: 10px;
  background: #f1f3f5;
}
</style>
