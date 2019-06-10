<template>
<div class="d-flex justify-content-center">
  <div :class="[type]" class="alert alert-dismissible w-50">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    <h5>
      <i class="icon fa fa-ban"></i> {{title}}
    </h5>
    {{mes}}
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Alert',
    props : ['type','title','mes']
};
</script>

<style>
</style>
