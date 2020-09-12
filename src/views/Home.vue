<template>
  <div class='topbar'>
    <navibar >
      <naviitem class='naviitem'>🎶首页</naviitem>
      <naviitem class='naviitem'>✨技术</naviitem>
      <naviitem class='naviitem'>🎁其他</naviitem>
      <naviitem class='naviitem'>🐱‍🚀关于</naviitem>
    </navibar>

    <intro class='intro'>
      
    </intro>

  </div>
</template>

<script>
  import navibar from '../components/navigate/navibar'
  import naviitem from '../components/navigate/naviitem'
  import intro from '../components/introduce/intro'
  export default {
    name:'Home',
    components:{
      navibar,
      naviitem,
      intro
    }
  }
</script>

<style scoped>
.topbar {
    text-decoration: none;
    color:black;
    display: block;
    width: 68%;
    height: 48px;
    border-bottom: 2px solid lightgray;
    border-right: 2px solid lightgray;
    margin: 0 auto;
  }
  .intro {
    position: relative;
    top: 49px;
    padding-top: 60px;
    border-right:2px solid lightgray;
    border-bottom: 2px solid lightgray;
    width: 20%;
    height: 768px;
    text-align: center;
  }
  .naviitem {
    display: inline;
    padding:8px 5px;
    text-align: center;
    margin: auto;
    font-size: 16px;
    font-weight: bold;
    border-left: 2px solid lightgrey;
  }
  .naviitem:hover {
    background-color:tomato;
    color:white;
  }
  .naviitem:active {
    transform: translateY(2px);
  }
</style>

