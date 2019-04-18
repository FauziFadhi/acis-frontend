<template>
  <section class="container">
    <div id="minimal">
      <div class="demo"></div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
  
export default {
  components: {
    Logo
  },
  mounted(){
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
