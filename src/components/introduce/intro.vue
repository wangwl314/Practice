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

<style>
  .intro {
    float: left;
    position: fixed;
    padding-top: 9%;
    border-right:2px solid lightgray;
    border-bottom: 2px solid lightgray;
    width: 20%;
    text-align: center;
  }
</style>