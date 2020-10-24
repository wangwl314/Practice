<template>
  <div>
    <div class="login"> 
      <h1>登录</h1> 
      
      <div>账号:<input type="text" placeholder="请输入用户名" v-model="username" required></div>
     
      <div>密码:<input type="password" placeholder="请输入密码" v-model="password" required></div>
      
      <div><button @click="login">登录</button></div> 
    </div>
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
        url: this.$store.state.base_url+'gettoken/',
        data: {
          username: this.username,
          password: this.password,
        },
      }).then(res => {
        if(res.status<400){
          window.localStorage.setItem('token',res.data.access)
          window.localStorage.setItem('refresh', res.data.refresh)
          this.$store.dispatch('gettoken',res.data.access)
          this.$store.dispatch('updatetoken',res.data.refresh)
          this.$router.replace('/creation')
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
.login {text-align: center;margin: auto; width: 33%;border: 1px solid;padding: 30px 0;
  position: relative;top: 260px;}
</style>