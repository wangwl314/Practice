<template>
  <div>
    <h2>this is home page...</h2>
    <p>{{$store.state.movies}}</p>
    <button @click='plus'>+</button>
    <button @click='minus'>-</button>
  </div>
</template>

<script>
  export default {
    name:'Home',
    methods:{
     plus (){
       this.$store.commit('func1')
     },
     minus (){
       this.$store.commit('func2')
     }
    }
  }
</script>


<style>

</style>

