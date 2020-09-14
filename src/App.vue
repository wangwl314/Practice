<template>
  <div>
    <div>
    <navibar>
      <naviitem path='/about'>🐱‍🚀关于</naviitem>
      <naviitem path='/other'>🎁其他</naviitem>
      <naviitem path='/tech'>✨技术</naviitem>
      <naviitem path='/'>🎶首页</naviitem>  
    </navibar>
    </div>

    <div>
      <intro>
      <img  src='@/assets/img/logo.png'>
      <p>作者信息</p>
      </intro>
      <article class='article-area'>
      <router-link to='/'></router-link>
      <keep-alive><router-view></router-view></keep-alive>
      </article>
    </div>
    
  </div>
</template>

<script>
import navibar from './components/navigate/navibar'
import naviitem from './components/navigate/naviitem'
import intro from './components/introduce/intro'
export default {
  name: 'App',
  components:{
    intro,
    naviitem,
    navibar
  } 
}
</script>

<style>
  @import './assets/css/base.css';
  .article-area {
    float: right;
    width: 78%;
    text-align: center;
  }
</style>