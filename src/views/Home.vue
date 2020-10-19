<template>
<div>
  <router-link to = '/um' />
  <router-view />  
  <div>
    <abstract></abstract>
  </div>
  
  <button @click="showdata" style="margin-left:90px;">test</button>

  </div>
</template>

<script>
  import login from '../components/login/login'
  import abstract from '../components/abstract/abstract'
  export default {
    name:'Home',
    methods:{
      showdata (){
        console.log('test');
      }
     },
    components:{
      login,
      abstract,
    }, 
  }
</script>


<style>

</style>

