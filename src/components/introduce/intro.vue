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
    margin-left: 3%;
    margin-top: 5%;
    border-right:2px solid gray;
    width: 19%;
    text-align: center;
    padding: 3% 3%;
  }
</style>