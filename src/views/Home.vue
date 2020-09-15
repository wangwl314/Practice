<template>
  <div>
    <h2>this is home page...</h2>
    <p>{{$store.state.movies}}</p>
    <p>{{$store.state.books}}</p>
    <button @click='plus'>+-</button>
    <button @click='books'>book</button>
  </div>
</template>

<script>
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
     }
    }
  }
</script>


<style>

</style>

