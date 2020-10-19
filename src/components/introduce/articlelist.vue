<template>
  <div class="wrap1">
    <div v-for="ls in articlels">
      <ul>
        <li>{{ls.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'articlelist',
  beforeCreate (){
    axios({
      url: 'http://127.0.0.1:8000/api/article/',
      method: 'get',
    }).then(res => {
      this.articlels = res.data.results
    })
    },
  data (){
    return {
      articlels: {}
    }
  }
}
</script>

<style scoped>
  .wrap1 {margin-top: 35%; text-align: left;line-height: 2.1;}
</style>