<template>
  <div>
    <template v-if="this.$auth.user">
      <div>
        Tournament
        <p>{{authenticated}}</p>
      </div>
    </template>
    <template v-else>
    <div>GG</div>
        </template>
  </div>
</template>



<script>
export default {
  mounted() {}
};
</script>

<style>
</style>
