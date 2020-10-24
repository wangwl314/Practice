<template>
  <div id='wrap2'>
    <article id='article'>
      <p>{{content}}</p>
      <span>{{nikename}}</span>
    </article>
    <div id="typein">
      <div><textarea placeholder="请输入内容" v-model="content"></textarea></div>
      <input type="text" placeholder="请输入昵称" v-model="nikename" class="ipt">    
      <button class="ipt" @click="sub">提交</button>
    </div>
    <span id='tip' v-show="tip">添加成功</span>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'creation',
  data (){
    return {
      nikename:'',
      content:'',
      tip:false
    }
  },
  methods: {
    sub (){
      axios.interceptors.request.use(function(config){
      config.headers = {'Authorization':'Bearer'+' '+localStorage.getItem('token')}
      return config
      }), 
      axios({
        url: this.$store.state.base_url+'msg/',
        method:'get',
        data: {
          nikename:this.nikename,
          content: this.content
        }
      }).then((res) =>{
        if(res.status<400){
          this.tip = true;
          this.content = ''
          this.nikename = ''
          setTimeout(() => {this.tip = false},500)
        }
      })
    },
     
  },
   
}
</script>

<style scoped>
#wrap2 {position: absolute;top: 13%;right: 14%;width: 70%;}
#article {height: 320px;border: 1px solid;
  margin-bottom: 15px;padding: 15px 5%;text-align: center;}
#typein {width: 100%;border: 1px solid;text-align: center;padding: 15px 5px;}
.ipt {font-size: 20px;margin: 10px auto;width: 90%;}
textarea {font-size: 20px;width: 90%;height: 260px;}
p {text-align: start;font-size: 20px;}
#tip {width: 80px; height: 80px;text-align: center;background-color: powderblue;
margin:auto;border: 1px solid;position: absolute;left: 50%;top: 35%;}
</style>

