<template>
  <div>

    <div style="margin-right:7%">  
      <navibar>
        <naviitem path='/'>首页</naviitem>
        <naviitem path='/tech'>技术</naviitem>
        <naviitem path='/other'>其他</naviitem>
        <naviitem path='/about' v-if="this.$store.state.loginstat">离开</naviitem> 
        <naviitem path='/login' v-if="!this.$store.state.loginstat">记录</naviitem> 
      </navibar>
    </div>

    <div>
      <intro>
      <img  src='@/assets/img/logo.png'>
      <p>作者信息</p>
      <articlelist></articlelist>
      </intro>  
    </div>

  </div>
</template>

<script>
import navibar from '@/components/navigate/navibar'
import naviitem from '@/components/navigate/naviitem'
import intro from '@/components/introduce/intro'
import articlelist from '@/components/introduce/articlelist';
export default {
  name: 'unmove',
  components:{
    intro,
    articlelist,
    naviitem,
    navibar,
  }
}
</script>