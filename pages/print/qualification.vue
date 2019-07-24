<template>
  <div>
    <h3 class="text-center">Qualification List From {{$route.params.category}}</h3>
    <qualification :participants="$route.params.participants" />
  </div>
</template>

<script>
import qualification from "../../components/qualification";

export default {
  mounted() {
    window.print();
    this.$router.go(-1);
  },
  layout: "custom",
  components: {
    qualification
  }
};
</script>

<style>
</style>
