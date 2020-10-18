<template>
  
  <div>  
  <div style="margin-right:7%">  
    <navibar>
      <naviitem path='/'>首页</naviitem>
      <naviitem path='/tech'>技术</naviitem>
      <naviitem path='/other'>其他</naviitem>
      <naviitem path='/about' v-if="this.$store.state.loginstat">关于</naviitem> 
      <naviitem path='/login' v-if="!this.$store.state.loginstat">记录</naviitem> 
    </navibar>
  </div>  

    <div>
      <intro>
      <img  src='@/assets/img/logo.png'>
      <p>作者信息</p>
      </intro>
      <article class='article-area'>
      <router-link to='/'></router-link>
      <keep-alive><router-view></router-view></keep-alive>
      </article>
    </div>

    <button @click="showdata">+++</button>

  </div>
</template>

<script>
  import navibar from '../components/navigate/navibar'
  import naviitem from '../components/navigate/naviitem'
  import intro from '../components/introduce/intro'
  import login from '../components/login/login'
  import axios from 'axios'
  export default {
    name:'Home',
    methods:{
      showdata (){
        let x = this.$store.state.access
        let y = this.$store.state.refresh
        console.log(x, y);
      }
     },
     components:{
      intro,
      naviitem,
      navibar,
      login,
    }, 
  }
</script>


<style>
@import '../assets/css/base.css';
  .article-area {
    float: right;
    width: 78%;
    text-align: center;
  }
</style>

