<template>
  <div class="wrap1">
    <div v-for="ls in articlels">
      {{ls.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'articlelist',
  data (){
    return {
      articlels: this.$store.state.abstract
    }
  }
}
</script>

<style scoped>
  .wrap1 {margin-top: 35%; text-align: left;line-height: 2.1;}
</style>