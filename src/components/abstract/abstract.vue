<template>
  <div class="abstract">
    <div v-for="item in abs">
      <h2 id='titl'>{{item.title}}</h2>
      <label for="titl">{{item.insTime}}</label>
      <p>{{item.text}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'abstract',
  beforeCreate (){
    axios({
      url: 'http://127.0.0.1:8000/api/article/',
      method: 'get',
    }).then(res => {
      this.abs = res.data.results
    })
    },
  data (){
    return {
      abs: {},
    }
  } 
}
</script>

<style scoped>
.abstract {border: 1px solid gray; width: 53%; position: absolute;
right: 11%;top: 13%;text-align: justify;line-height: 1.4;padding: 15px 30px;}
</style>