<template>
  <div>
    <!-- <Alert v-if="alert" :type="type" :mes="mes" :title="Title"/> -->
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
                  v-model="selected.area_id"
                  text-field="name"
                  value-field="id"
                  :options="area"
                ></b-form-radio-group>
              </b-form-group>
              <span v-if="errors.area_id" class="text-danger">Area is required</span>
              <div class="form-group">
                <label class="col-sm-10 px-0 control label">Registration Due Date</label>
                <div class="col-sm-10 px-0">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </div>
                    <vuejs-datepicker v-model="selected.registrationDate" :disabled-dates="disableDates"></vuejs-datepicker>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-10 px-0 control label">Payment Due Date</label>
                <div class="col-sm-10 px-0">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </div>
                    <vuejs-datepicker v-model="selected.paymentDate" :disabled-dates="disableDates"></vuejs-datepicker>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-10 px-0 control label">Payment Price</label>
                <div class="col-sm-10 px-0">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        Rp.
                      </span>
                    </div>
                    <input type="text" v-model="selected.price" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="$1,000,000.00">
                  </div>
                </div>
              </div>
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
            <span
              v-if="errors.competitionDetails"
              class="text-danger"
            >{{errors.competitionDetails[0]}}</span>
            <br>
            <b-form-group class="mb-0">
              <div>
                <table class="table table-condensed table-responsive mb-0">
                  <thead class="d-block">
                    <tr>
                      <th style="width:90%;">Category</th>
                      <th style="width: 40px">Quota</th>
                      <th style="width: 40px"></th>
                    </tr>
                  </thead>
                  <tbody class="overflow-auto d-block" style="max-height:400px;">
                    <tr v-for="(category,index) in orderCategory" :key="index">
                      <td style="width:100%;">{{category.name}}</td>
                      <td style="width: 40px">
                        <input
                          type="text"
                          size="1"
                          v-model="selected.competitionDetails[index].quota"
                        >
                      </td>
                      <td style="width: 40px">
                        <button v-on:click="removeCategories(index)" class="btn btn-sm btn-danger">x</button>
                      </td>
                      <span
                        v-if="errors.competitionDetails"
                        class="text-danger"
                      >{{errors.competitionDetails[index].quota}}</span>
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
                <span v-if="errors.name" class="text-danger">{{errors.name[0]}}</span>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control label">Address</label>
              <div class="col-sm-10">
                <textarea
                  name
                  id
                  cols="30"
                  v-model="selected.address"
                  rows="3"
                  class="form-control"
                ></textarea>
                <span v-if="errors.address" class="text-danger">{{errors.address[0]}}</span>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control label">Description</label>
              <div class="col-sm-10">
                <textarea
                  name
                  id
                  cols="30"
                  v-model="selected.description"
                  rows="3"
                  class="form-control"
                ></textarea>
                <span v-if="errors.description" class="text-danger">{{errors.description[0]}}</span>
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
                <span v-if="errors.city_id" class="text-danger">City is Required</span>
              </div>
              <hr>
              <b-form-group>
                <label class="mr-lg-3 ml-5">THB</label>
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()">
                <span v-if="errors.file" class="text-danger">{{errors.file[0]}}</span>
              </b-form-group>
              <b-form-group>
                <label class="mr-lg-3 ml-5">Image</label>
                <template>
                  <div
                    id="my-strictly-unique-vue-upload-multiple-image"
                    style="display: flex; justify-content: center;"
                  >
                    <vue-upload-multiple-image
                      @upload-success="uploadImageSuccess"
                      @before-remove="beforeRemove"
                      @edit-image="editImage"
                      :data-images="images"
                      :maxImage=3
                      dragText="Images"
                      browseText="Browse"
                    ></vue-upload-multiple-image>
                  </div>
                </template>
              </b-form-group>
              <hr>
              <b-form-group>
                <b-button class="btn-success" v-on:click="sendData">Create Tournament</b-button>
              </b-form-group>
            </div>
          </div>
        </div>
        {{selected}}
        {{errors}}
      </div>
    </div>
  </div>
</template>

<script>
import daterangepicker from "daterangepicker";
import moment from "moment-timezone";
export default {
  data() {
    return {
      disableDates:{
        to: new Date()
      },
      indonesia: require("~/static/city_province.json"),
      selected: {
        area_id:null,
        price: "",
        name: null,
        address: null
      },
      errors: {
        area_id: null,
        file: []
      },
      file: null,
      images: [],
      imagesUpload: [],
      province: null,
      area: [{ id: "1", name: "Indoor" }, { id: "2", name: "Outdoor" }],
      categories: []
    };
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      this.imagesUpload.push(formData.get("file"));

      // Upload image api
      // this.$axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    removeCategories: function(index) {
      this.selected.competitionDetails.splice(index, 1);
    },
    sendData: function() {
      let data = new FormData();
      let date = moment($("#reservation").data("daterangepicker").startDate._d);
      data.append("start_date", date.tz("Asia/Jakarta").format("YYYY/MM/DD"));

      date = moment($("#reservation").data("daterangepicker").endDate._d);
      data.append("end_date", date.tz("Asia/Jakarta").format("YYYY/MM/DD"));
      this.selected.competitionDetails = _.map(
        this.selected.competitionDetails,
        function(a) {
          let id = a.id;
          if (a.category_id) id = a.category_id;
          return { category_id: id, name: a.name, quota: a.quota };
        }
      );
      for (let i = 0; i < this.selected.competitionDetails.length; i++) {
        data.append(
          "competitionDetails[" + i + "][category_id]",
          this.selected.competitionDetails[i].category_id
        );
        data.append(
          "competitionDetails[" + i + "][quota]",
          this.selected.competitionDetails[i].quota
        );
      }
      data.append("name", this.selected.name);
      data.append("payment_due_date", moment(this.selected.payment_due_date).tz("Asia/Jakarta").format("YYYY/MM/DD"));
      data.append("registration_due_date", moment(this.selected.registration_due_date).tz("Asia/Jakarta").format("YYYY/MM/DD"));
      data.append("area_id", this.selected.area_id);
      data.append("description", this.selected.description);
      data.append("city_id", this.selected.city_id);
      data.append("address", this.selected.address);
      data.append("price", this.selected.price.replace(",",""));
      data.append("competitionUploads[0][type]", "pdf");
      data.append("competitionUploads[0][file]", this.file);

      for (let i = 0; i < this.imagesUpload.length; i++) {
        data.append("competitionUploads[" + (i + 1) + "][type]", "pdf");
        data.append(
          "competitionUploads[" + (i + 1) + "][file]",
          this.imagesUpload[i]
        );
      }
      this.$axios
        .post("/competitions", data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: this.$auth.$storage._state["_token.local"]
          }
        })
        .then(resp => {
          this.$toast.success("success to create competitions");
          this.$router.push({
            path: "/dashboard/competition/" + resp.data.data.id
          });
          console.log(this.$router);
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          this.$toast.error(e.response.data.message);
          this.selected.competitionDetails = [];
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
    provinces() {
      return _.groupBy(this.indonesia, "province");
    },
    cities() {
      return _.filter(this.indonesia, ["province", this.province]);
    }
  },
  mounted() {
    $(function() {
      $("#reservation").daterangepicker({minDate: new Date()});
    });
    this.$axios.get("/categories").then(resp => {
      this.categories = resp.data.data;
    });
    // Jquery Dependency

$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
});


function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    
    // final formatting
    if (blur === "blur") {
      input_val += ".00";
    }
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}



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
