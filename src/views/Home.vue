<template>
  
  <div>  
  <div style="margin-right:7%">  
    <navibar>
      <naviitem path='/'>首页</naviitem>
      <naviitem path='/tech'>技术</naviitem>
      <naviitem path='/other'>其他</naviitem>
      <naviitem path='/about' v-if="this.$store.state.loginstat">离开</naviitem> 
      <naviitem path='/login' v-if="!this.$store.state.loginstat">记录</naviitem> 
    </navibar>
  </div>  

    <div>
      <intro>
      <img  src='@/assets/img/logo.png'>
      <p>作者信息</p>
      <articlelist></articlelist>
      </intro>  
    </div>

  <div>
    <abstract></abstract>
  </div>
  
    <button @click="showdata" style="margin-left:90px;">test</button>

  </div>
</template>

<script>
  import navibar from '../components/navigate/navibar'
  import naviitem from '../components/navigate/naviitem'
  import intro from '../components/introduce/intro'
  import login from '../components/login/login'
  import abstract from '../components/abstract/abstract'
  import articlelist from '../components/introduce/articlelist';
  import axios from 'axios'
  export default {
    name:'Home',
    methods:{
      showdata (){
        axios({
          url: 'http://127.0.0.1:8000/api/article/',
          method: 'get',
        }).then(res => {
          this.$store.dispatch('getlist', res.data.results)
        })
      }
     },
     components:{
      intro,
      naviitem,
      navibar,
      login,
      abstract,
      articlelist,
    }, 
  }
</script>


<style>

</style>

