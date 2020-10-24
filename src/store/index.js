import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    base_url:'http://127.0.0.1:8000/api/',
    movies:['ironman','superman','spiderman'],
    books:{
      name:'bobites',
      price:99
    },
    num:800,
    loginstat:false,
    access:'',
    refresh:'',
    abstract:[],
  },
  mutations: {
    func1 (state){
      if (!state.movies.includes('xman')){
        state.movies.push('xman')
      }else{
        state.movies.splice(-1,1)
      }
    },
    func2 (state,count){
        state.num += count
    },
    func3 (state){
      if (!state.books.author){
        Vue.set(state.books,'author','ark')
      }else{
        Vue.delete(state.books,'author')
      }
    },
    chg1 (state){state.loginstat = !state.loginstat},
    chg2 (state, pl1){state.access = pl1},
    chg3 (state, pl2){state.refresh = pl2},
    chg4 (state, vl3){state.abstract = vl3}
  },
  actions: {
    update (context){
      setTimeout(() => {
        context.commit('func1')
      },1000)
    },
    chgstat (context){context.commit('chg1')},
    gettoken (context, pl1){context.commit('chg2', pl1)},
    updatetoken (context, pl2){context.commit('chg3', pl2)},
    getabstract (context, vl3){context.commit('chg4',vl3)}
  },
  modules: {
  }
})
