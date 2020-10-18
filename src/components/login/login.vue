<template>
<div class="login">
  
    <h1>登录</h1>
    <div>账号：<input type="text" placeholder="请输入用户名" v-model="username" required></div>
    <div>密码：<input type="password" placeholder="请输入密码" v-model="password" required></div>
    <div><button @click="login">登录</button></div>
  
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "login",
  data (){
    return {
      username:"",
      password:"",
    }   
  },
  methods: {
    login(){
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/gettoken/',
        data: {
          username: this.username,
          password: this.password,
        },
      }).then(res => {
        if(res.status<400){
          this.$store.dispatch('chgstat')
          this.$store.dispatch('gettoken',res.data.access)
          this.$store.dispatch('updatetoken',res.data.refresh)
          this.$router.replace('/home')
        }else{
          alert('access denyed')
        }
      })
    }
  },
}

</script>

<style scoped>
input {margin-bottom: 19px; height: 26px; border: 1px solid gray; border-radius: 4px;}
/*input:focus {border: 1px solid pink; background-color: blanchedalmond; color: crimson;}*/
.login {text-align: center; border-top: 1px solid black; border-bottom: 1px solid black;
margin: auto; margin-top: 25%; width: 33%; padding: 20px 0;}
</style>