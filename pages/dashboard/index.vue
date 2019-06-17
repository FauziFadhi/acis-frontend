<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Province / City</th>
          <th>Start Date - End Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(comp,i) in competitions" :key="comp.id">
          <td>{{i+1}}</td>
          <td>{{comp.name}}</td>
          <td>{{comp.city.province}} / {{comp.city.city}}</td>
          <td>{{comp.start_date}} - {{comp.end_date}}</td>
          <td>{{comp.status}}</td>
          <td>
            <nuxt-link class="btn-sm btn-success" :to="{path:'/dashboard/competition/'+comp.id}">Detail</nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      competitions: []
    };
  },
  async created() {
    this.$axios
      .get("/competitions/", {
        params: { createdBy: this.user.id, load: "city" }
      })
      .then(resp => {
        this.competitions = resp.data.data;
      });
  },
  mounted() {
    var minimalData = {
      teams: [
        ["Team 1", "Team 2"] /* first matchup */,
        ["Team 3", "Team 4"] /* second matchup */
      ],
      results: [
        [[1, 2], [3, 4]] /* first round */,
        [[4, 6], [2, 1]] /* second round */
      ]
    };

    $(function() {
      $("#minimal .demo").bracket({
        init: minimalData /* data to initialize the bracket with */
      });
    });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
