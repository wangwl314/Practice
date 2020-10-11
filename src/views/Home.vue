<template>
  <div class="text">
    <h2>this is home page...</h2>
    <p>{{$store.state.movies}}</p>
    <p>{{$store.state.books}}</p>
    <button @click='plus'>+-</button>
    <button @click='books'>book</button>
    <button @click="getdata">showMetheData</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'Home',
    data (){
      return {
        msg:'test msg..'
      }
    },
    methods:{
     plus (){
       this.$store.commit('func1')
     },
     books (){
       this.$store.commit('func3')
     },
     getdata (){
       axios({
         url:'http://127.0.0.1:8000/arls/'
       }).then(res =>{
         console.log(res);
       })
     }
    }
  }
</script>


<style>

</style>

