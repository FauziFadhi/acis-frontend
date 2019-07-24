<template>
  <div :id="'big'+detailId" class="align-middle">
    <div class="demo"></div>
  </div>
</template>

<script>
export default {
    props: ['detailId','bracketData'],
    mounted(){
        $(
              "div#big" + this.detailId + " .demo"
            ).bracket({
              teamWidth: 200,
              init: this.bracketData,
              onMatchClick: this.getMatch

              // decorator: { edit: edit_fn, render: render_fn }
            });
    }
};
</script>

<style>
</style>
