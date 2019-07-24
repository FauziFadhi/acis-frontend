<template>
  <table class="table-striped table table-responsive-md">
    <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Total</th>
        <th>X+10</th>
        <th>X</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(participant,i) in byTotal"
        :key="participant.id"
        :data-id="participant.id"
      >
        <td>{{i+1}}</td>
        <td>{{participant.user.name}}</td>
        <td>{{participant.totalScore}}</td>
        <td>{{participant.totalsx10}}</td>
        <td>{{participant.totalsx}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    props: ['participants'],
    data(){
        return{
            byTotal: []
        }
    },
    created(){
        this.byTotal = _.orderBy(this.participants,['totalScore'],['desc'])
    },
};
</script>

<style>
</style>
