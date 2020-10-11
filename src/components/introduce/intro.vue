<template>
  <aside class='intro'>
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name:'intro'
}
</script>

<style scoped>
  .intro {
    float: left;
    position: fixed;
    margin-top: 11%;
    border-right:2px solid lightgray;
    width: 23%;
    text-align: center;
  }
</style>