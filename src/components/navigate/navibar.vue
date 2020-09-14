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
    text-decoration: none;
    color:black;
    display: block;
    width: 70%;
    height: 48px;
    border-bottom: 2px solid lightgray;
    border-right: 2px solid lightgray;
    margin: 0 auto;
  }
</style>