<template>
  <div class="col-md-12">
    <table class="table table-condensed table-stripped table-responsive-md">
      <tbody>
        <tr>
          <th style="width: 40px">#</th>
          <th>Name</th>
          <th>Team</th>
          <th>Status</th>
        </tr>
        <tr v-for="(participant,i) in participants" :key="participant.id">
          <td>{{i+1}}</td>
          <td>{{participant.user.name}}</td>
          <td>{{participant.user.team}}</td>
          <td>{{participant.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {},
  props: ["participants"]
};
</script>

<style>
</style>
