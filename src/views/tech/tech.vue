<template>
  <div>
    <h2>tech page...</h2>
    <p>{{$store.state.movies}}</p>
    <button @click='func1'>chg</button>
  </div>
</template>

<script>
export default {
  methods:{
    func1 (){
      this.$store.commit('func1')
    }
  }
}
</script>