<template>
  <div class="row">
    <div class="col-12">
      <!-- Custom Tabs -->
      <div class="card card-danger">
        <div class="card-header d-flex p-0">
          <h3 class="card-title p-3">Category</h3>
          <ul class="nav nav-pills ml-auto p-2">
            <li class="nav-item">
              <a class="nav-link active" href="#tab_1" data-toggle="tab">Recurve</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tab_2" data-toggle="tab">Compound</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tab_3" data-toggle="tab">Standard Nasional</a>
            </li>
          </ul>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="tab-content">
            <div class="tab-pane active" id="tab_1">
              <div class="overflow-auto" style="height: 680px; overflow:hidden;">
                <table class="table table-condensed">
                  <tbody>
                    <tr>
                      <th style="width: 40px">#</th>
                      <th>Label</th>
                      <th style="width: 40px">action</th>
                    </tr>
                    <tr v-for="i in 30" :key="i">
                      <td>aaaaaaaaaa</td>
                      <td>aaaaaaaaaa</td>
                      <td>aaaaaaaaaa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_2">
              The European languages are members of the same family. Their separate existence is a myth.
              For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
              in their grammar, their pronunciation and their most common words. Everyone realizes why a
              new common language would be desirable: one could refuse to pay expensive translators. To
              achieve this, it would be necessary to have uniform grammar, pronunciation and more common
              words. If several languages coalesce, the grammar of the resulting language is more simple
              and regular than that of the individual languages.
            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <!-- /.tab-pane -->
          </div>
          <!-- /.tab-content -->
        </div>
        <!-- /.card-body -->
      </div>
      <!-- ./card -->
    </div>
    <!-- /.col -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      participants: [
        {
          id: "1",
          name: "Fauzi Fadhillah",
          club: "BACS"
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route)
  }
};
</script>

<style>
</style>
