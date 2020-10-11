<template>
  
  <div class='btnstyle' @click='btnclick'><slot></slot></div>
  
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


<style scoped>
  
  .btnstyle:hover {
    color: tomato;
    transform: translateY(-5px);
    text-shadow: -2px 5px 0 gray;
  }
  .btnstyle:active {
    transform: translateY(2px);
  }
  .btnstyle {
    display: inline-block;
    border: none;
    background-color: #ffffff;
    margin-right: 13px;
    font-size: 27px;
    font-weight: 500; 
  }
  
</style>