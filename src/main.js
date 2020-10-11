import Vue from 'vue'
import router from '@/router'
import App from '@/App'
import store from './store'
////import axios from './axios'

Vue.config.productionTip = false
//Vue.use(axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//axios({
//  url:cloud.music,
//}).then(res =>{
//  console.log(res);
//})