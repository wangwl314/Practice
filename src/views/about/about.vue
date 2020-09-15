<template>
  <div>
    <h2>about page</h2>
    <h2>{{$store.state.movies}}</h2>
    <button @click='funcx'>++</button>
  </div>
</template>

<script>
export default {
  methods:{
    funcx (){
      this.$store.dispatch('update')
    }
  }
}
</script>