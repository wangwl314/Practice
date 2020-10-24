<template>
<div>
  <div id="details">
    <h1>{{dtl.title}}</h1>
    <p>{{dtl.text}}</p>
  </div>
  <label for="details">{{dtl.insTime}}</label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'det',
  data (){
    return {
      dtl: {}
    }
  },
  beforeMount (){
    let id = this.$route.query.id
    axios({
      url: this.$store.state.base_url+'article/'+id,
      method: 'get',
    }).then(res => {
      this.dtl = res.data
    })
  }
}
</script>

<style scoped>
#details {position:absolute;top:17%;left: 15%; width:69%;text-align: center;}
p {text-align:left;margin: 10% 3%; border: 1px solid;padding: 4% 4%;}
</style>