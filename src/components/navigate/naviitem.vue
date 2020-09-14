<template>
  <div class='naviitem'>
    <button class='btnstyle' @click='btnclick'><slot></slot></button>
  </div>
</template>

<script>
  export default {
    name: 'naviitem',
    props:{
      path:String
    },
    methods:{
      btnclick (){
        this.$router.push(this.path)
      }
    }
  }
</script>


<style>
  .naviitem {
    float: right;
    margin-right: 15px;
    border-left: 2px solid lightgrey;
  }
  .btnstyle:hover {
    color: tomato;
  }
  .btnstyle:active {
    transform: translateY(2px);
  }
  .btnstyle {
    border: none;
    background-color: #fff;
    margin: auto;
    font-size: 16px;
    font-weight: bold;
    padding:8px 5px;
    text-align: center;
  }
  
</style>