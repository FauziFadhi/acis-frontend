<template>
  <div class="row">
    <div class="col-md-7">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Bracket Elimination</h3>
        </div>
        <div class="card-body overflow-auto">
          <div id="big">
            <div class="demo"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Bracket Elimination</h3>
        </div>
        <div class="card-body overflow-auto" style="500px;">
          <table class="table table-condensed">
            <tbody>
              <tr>
                <th style="width: 10px">#</th>
                <th>Task</th>
                <th>Progress</th>
                <th style="width: 40px">Label</th>
              </tr>
              <tr>
                <td>a</td>
                <td>s</td>
                <td>d</td>
                <td>d</td>
              </tr>
              <tr>
                <td>a</td>
                <td>s</td>
                <td>d</td>
                <td>d</td>
              </tr>
              <tr>
                <td>a</td>
                <td>s</td>
                <td>d</td>
                <td>d</td>
              </tr>
            </tbody>
            <tr></tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    var minimalData = {
      teams: [
        ["Muhammad Herlambang Ragowo Utomo", "Team 2"],
        ["Muhammad Herlambang Ragowo Utomo", "Team 2"]
      ],
      results: [[[3, 5], [5, 4]], [[3, 5], [5, 4]]]
    };

    function edit_fn(container, data, doneCb) {}

    function render_fn(container, data, score, state) {
      switch (state) {
        case "entry-no-score":
        case "entry-default-win":
        case "entry-complete":
          // buat nambahin
          container.append("<div class='row'><div class='col-sm-8'>Nama Fauzi</div><div class='col-sm-4'>Nama Club</div></div>").append("");
          return;
      }
    }

    $(function() {
      $("div#big .demo").bracket({
        teamWidth: 200,
        init: minimalData,
        decorator: { edit: edit_fn, render: render_fn }
      });
    });
  }
};
</script>

<style>
</style>
