<template>
  <div class="text">
    <h2>other page...</h2>
    <h2>{{$store.state.num}}</h2>
    <button @click="func1">+</button>
  </div>
</template>

<script>
export default {
  methods:{
    func1 (count){
      this.$store.commit('func2',15)
    }
  }
}
</script>

<style>
.text {margin-top:9%;}
</style>