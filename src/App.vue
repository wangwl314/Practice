<template>
<div id="app">
  <nav id='nav'>
    <router-link to='/login' class="btnstyle" v-if="this.$store.state.loginstat">离开</router-link>
    <router-link to = '/login' class="btnstyle" v-if="!this.$store.state.loginstat">记录</router-link>
    <router-link to = '/other' class="btnstyle">其他</router-link>
    <router-link to = '/teck' class="btnstyle">技术</router-link>
    <router-link to = '/home' class="btnstyle">首页</router-link>  
    <router-view />
  </nav>
</div>
</template>

<script>
export default {
  
}
</script>


<style>
  #app {margin-top: 30px; margin-right: 9%;}
  #nav {display: block;}
  .btnstyle:hover {color: tomato;transform: translateY(-5px);text-shadow: -2px 5px 0 gray;}
  .btnstyle:active {transform: translateY(2px);}
  .btnstyle {color: black;margin-right: 13px;float: right;font-size: 210%;font-weight: 530;}
</style>