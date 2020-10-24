<template>
<div id="app">
  <nav id='nav'>
    <router-link to='/home' class="btnstyle" v-if="stat" @click="leave">离开</router-link>
    <router-link to = '/login' class="btnstyle" v-if="!stat">记录</router-link>
    <router-link to = '/creation' class="btnstyle">其他</router-link>
    <router-link to = '/tech' class="btnstyle">技术</router-link>
    <router-link to = '/home' class="btnstyle">首页</router-link>
  </nav>  
    <router-view />
</div>
</template>

<script>
export default {
  data (){
    return {
      stat: Boolean
    }
  },
  mounted (){
    if(this.$store.state.access){
      this.stat = true
    }else{this.stat = false}
  },
  methods: {
    leave (){
      this.stat = false
    }
  }
}
</script>


<style>
  #app {margin-top: 30px; margin-right: 9%;}
  #nav {display: block;}
  .btnstyle:hover {color: tomato;transform: translateY(-5px);text-shadow: -2px 5px 0 gray;}
  .btnstyle:active {transform: translateY(2px);}
  .btnstyle {color: black;margin-right: 13px;float: right;font-size: 210%;font-weight: 530;}
</style>