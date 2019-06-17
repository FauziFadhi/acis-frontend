<template>
  <div>
    <template v-if="loggedIn">
      <div>
        Tournament
        <p></p>
      </div>
    </template>
    <template v-else>
    <div>GG</div>
        </template>
  </div>
</template>



<script>
export default {
  mounted() {
    console.log(this.$route)
  }
};
</script>

<style>
</style>
