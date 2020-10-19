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
    margin-left: 4%;
    margin-top: 7%;
    border-right:2px solid gray;
    width: 22%;
    text-align: center;
    padding: 3% 2%;
  }
</style>