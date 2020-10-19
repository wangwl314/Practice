<template>
  <div class='navibar'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'navibar'
  }
</script>

<style scoped>
  .navibar {
    float: right;
    margin-right: 3%;
  }
</style>