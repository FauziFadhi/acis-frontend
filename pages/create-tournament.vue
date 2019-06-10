<template>
<div>

  <Alert v-if="alert" :type="type" :mes="mes" :title="Title"/>
  <div class="row">
    <div class="col-md-4">
      <div class="card card-danger">
        <div class="card-header">
          <h3 class="card-title">Competition Detail</h3>
        </div>
        <div class="card-body">
          <div class="col-md-12">
            <b-form-group>
              <b-form-radio-group v-model="selected.area" text-field="name" :options="area">
                <span class="ml-3 text-bold">Area :</span>
                {{ selected.area }}
              </b-form-radio-group>
            </b-form-group>
          </div>
          <hr>
          <b-form-group>
            <v-select
              style="max-height:300px;"
              v-model="selected.competitionDetails"
              multiple
              :closeOnSelect="false"
              height="50"
              hide-selected
              max-height="200px"
              placeholder="Type Here for search"
              :options="categories"
              label="name"
            ></v-select>
          </b-form-group>
          <br>
          <b-form-group class="mb-0">
            <div>
              <table class="table table-condensed mb-0">
                <thead class="d-block">
                  <tr>
                    <th style="width: 40px">#</th>
                    <th style="width:100%;">Category</th>
                    <th style="width: 40px"></th>
                  </tr>
                </thead>
                <tbody class="overflow-auto d-block" style="max-height:400px;">
                  <tr v-for="category,index in orderCategory">
                    <td style="width: 40px">{{ index + 1 }}</td>
                    <td style="width:100%;">{{category.name}}</td>
                    <td style="width: 40px">
                      <button v-on:click="removeCategories(index)" class="btn btn-sm btn-danger">x</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-form-group>
        </div>
      </div>
    </div>

    <!-- Competition Information -->
    <div class="col-md-8">
      <div class="card card-primary">
        <div class="card-header">
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
                v-model="province"
                id="province"
                placeholder="Type Here"
                :options="Object.keys(provinces)"
              ></v-select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control label">City / Region</label>
            <div class="col-sm-10">
              <v-select placeholder="Type Here" label="name" :options="cities" @input="setCity"/>
            </div>
            <hr>
            <b-form-group>
              <label class="mr-lg-3 ml-5">THB</label>
              <b-button v-on:click="sendData">Upload</b-button>
            </b-form-group>
          </div>
        </div>
      </div>
      {{selected}}
    </div>
  </div>
</div>

</template>

<script>
import daterangepicker from "daterangepicker";
import Alert from "../components/Alert";
import axios from "axios";
//TODO: Onchange province
export default {
  data() {
    return {
      indonesia: require("~/static/city_province.json"),
      selected: {},
      Title: "GG",
      alert: false,
      mes: "Test Message",
      type: "alert-danger",
      province: null,
      area: [{ id: "1", name: "Indoor" }, { id: "2", name: "Outdoor" }],
      categories: []
    };
  },
  methods: {
    removeCategories: function(index) {
      this.selected.competitionDetails.splice(index, 1);
    },
    sendData: function() {
      this.selected.competitionDetails = _.map(this.selected.competitionDetails, function(a){
        return {'category_id': a.id,
        quota:0
        }
      })
    console.log(this.selected.competitionDetails)
      axios
        .post("http://localhost:8000/api/competitions", this.selected)
        .then(() => {
          alert("success");
        })
        .catch(e => {
          this.alert = true
          // console.log(e.response.data.errors.area_id[0])
        });
    },
    setCity(value) {
      this.selected.city_id = value.id;
    }
  },
  computed: {
    orderCategory: function() {
      return _.orderBy(this.selected.competitionDetails, "name");
    },

    getDate: function() {
      this.selected.date = $("#reservation").val();
    },
    provinces() {
      return _.groupBy(this.indonesia, "province");
    },

    cities() {
      return _.filter(this.indonesia, ["province", this.province]);
    }
  },
  mounted() {
    $(function() {
      $("#reservation").daterangepicker();
    });
    axios.get("http://localhost:8000/api/categories").then((resp) => {
      this.categories = resp.data.data
    });
  },
  components:{
    Alert
  }
};
</script>

<style>
::-webkit-scrollbar {
  width: 2px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  background: rgb(123, 143, 255);
}
</style>
