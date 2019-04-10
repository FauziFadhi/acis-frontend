<template>
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <div class="card-title"></div>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card card-primary">
        <div class="card-header p-2">
          <h3 class="card-title">Competition Information</h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label class="col-sm-2 control label">Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control label">Address</label>
            <div class="col-sm-10">
              <textarea name id cols="30" rows="10" class="form-control"></textarea>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import daterangepicker from "daterangepicker";
export default {
  mounted() {
    $(function() {
      $("#reservation").daterangepicker();
    });
  }
};
</script>

<style>
</style>
