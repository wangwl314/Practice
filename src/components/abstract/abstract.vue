<template>
<div>
  <aside class='intro'>
      <img  src='@/assets/img/logo.png'>
      <p>作者信息</p>
    <div class="wrap1">
      <ul v-for="ls in abs">
        <router-link :to="{path:'/details',query:{id:ls.id}}">
          <li>{{ls.title}}</li>
        </router-link>
      </ul>
    </div>
  </aside>

  <div class="abstract">
    <div v-for="item in abs" >
      <div id='titl1'><h2>{{item.title}}</h2></div>
      <label for="titl1">{{item.insTime}}</label>
      <router-link :to="{path:'/details',query:{id:item.id}}">
        <p>{{item.text.substr(0,65)}}...</p>
      </router-link>
      <hr> 
    </div>
  </div>
  
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'abstract',
  data (){
    return {
      abs: []
    }
  },
  created (){
    axios({
      url: 'http://192.168.3.252:8888/api/article/',
      method: 'get',
    }).then(res => {
      this.abs = res.data.results
    })
  }
}
</script>

<style>
a {text-decoration: none;}
.abstract {border: 1px solid gray; width: 53%; position: absolute;
right: 11%;top: 19%;text-align: justify;line-height: 1.4;padding: 15px 30px;}
.intro {float: left;margin-left: 3%;margin-top: 6%;border-right:2px solid gray;
    width: 19%;text-align: center;padding: 3% 3%;}
a {text-decoration: none;}
.wrap1 {margin-top: 35%; text-align: left;line-height: 2.1;}
</style>