<template>
  <div class="row">
    <div class="col-md-4">
      <div class="card card-danger">
        <div class="card-header">
          <h3 class="card-title">Competition Detail</h3>
        </div>
        <div class="card-body">
          <div class="col-md-12">
            <b-form-group>
              <b-form-radio-group
                v-model="selected.area"
                text-field="name"
                :options="options"
              >
                <span class="ml-3 text-bold">Area :</span>
                {{ selected.area }}
              </b-form-radio-group>
            </b-form-group>
          </div>
          <hr>
          <b-form-group>
            <v-select
              v-model="selected.category"
              id="province"
              placeholder="Type Here"
              :options="category"
              label="name"
            ></v-select>
          </b-form-group>
          <b-form-group>
            <div class="overflow-auto" style="500px;">
              <table class="table table-condensed">
                <tbody>
                  <tr>
                    <th style="width: 40px">#</th>
                    <th>Label</th>
                    <th style="width: 40px"></th>
                  </tr>
                  <tr>
                    <td>a</td>
                    <td>d</td>
                    <td>d</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-form-group>
          <hr>
          <b-form-group>
            <label class="mr-lg-3 ml-5">
              THB
            </label>
            <b-button>
              Upload
            </b-button>
          </b-form-group>
        </div>
      </div>
    </div>

    <!-- Competition Information -->
    <div class="col-md-8">
      <div class="card card-primary">
        <div class="card-header p-2">
          <h3 class="card-title">Competition Information</h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label class="col-sm-2 control label">Name</label>
            <div class="col-sm-10">
              <input type="text" v-model="selected.name" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control label">Address</label>
            <div class="col-sm-10">
              <textarea name id cols="30" v-model="selected.address" rows="3" class="form-control"></textarea>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control label">Date</label>
            <div class="col-sm-10">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-calendar"></i>
                  </span>
                </div>
                <input type="text" class="form-control float-right" id="reservation">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control label">Province</label>
            <div class="col-sm-10">
              <v-select
                v-model="selected.prov"
                id="province"
                placeholder="Type Here"
                :options="Object.keys(provinces)"
              ></v-select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control label">City / Region</label>
            <div class="col-sm-10">
              <v-select
                v-model="selected.city"
                id="city"
                placeholder="Type Here"
                label="name"
                :options="cities"
              ></v-select>
            </div>
          </div>
        </div>
      </div>
      {{selected}}
    </div>
  </div>
</template>

<script>
import daterangepicker from "daterangepicker";

//TODO: Onchange province
export default {
  data() {
    return {
      indonesia: require("~/static/city_province.json"),
      selected: {},
      date: "a",
      data: {},
      options: [{ id: "1", name: "Indoor" }, { id: "2", name: "Outdoor" }],
      category: [
        {
          id: "1",
          name: "Recurve SMA Putra 18 Menter"
        },
        {
          id: "2",
          name: "Compound SMA Putra 30 Menter"
        },
        {
          id: "3",
          name: "Compound SMA Putri 18 Menter"
        },
        {
          id: "4",
          name: "Standard Nasional SMA Putra 18 Menter"
        }
      ]
    };
  },
  created(){
   
  },
  computed: {
    provinces() {
      return _.groupBy(this.indonesia, "province");
    },

    cities() {
      return _.filter(this.indonesia, ["province", this.selected.prov]);
    },
    getDate(){
      console.log("getDate");
    }
  },
  mounted() {
     $(function() {
      $("#reservation").daterangepicker({
        function(start, end){
          selected.date = start
        }
      });
    });
  },
  methods: {
    
  }
};
</script>

<style>
.custom-control-label {
  position: initial !important;
}
</style>
