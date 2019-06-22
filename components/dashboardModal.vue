<template>
    <!-- The Modal -->
<div class="modal" :id="idModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">{{title}}</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <slot></slot>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" @click="bClick" class="btn btn-success">{{bTitle}}</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['idModal','title', 'bClick','bTitle']
}
</script>

<style>

</style>
