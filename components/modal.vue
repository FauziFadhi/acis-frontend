<template>
    <div
      class="modal fade"
      :id="idModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header justify-content-center">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h4 class="title title-up">{{title}}</h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" @click="bClick" data-dismiss="modal" class="btn btn-success">{{bTitle}}</button>
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
