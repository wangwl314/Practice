<template>
  <div>
    <h2>tech page...</h2>
    <p>{{$store.state.movies}}</p>
    <button @click='func1'>chg</button>
    <button @click="func2">store</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods:{
    func1 (){
      this.$store.commit('func1')
    },
    func2 (){
      axios({
        url:'http://127.0.0.1:8000/details',
        method: 'post',
        data : 'id=2'
      }).then(res => {
        console.log(res);
      })
    }
  }
}
</script>