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

<style>
  .navibar {
    float: right;
    margin-top:10px;
    padding: 0;
    display: block;
  }
</style>