import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies:['ironman','superman','spiderman'],
    books:{
      name:'bobites',
      price:99
    }
  },
  mutations: {
    func1 (state){
      if (!state.movies.includes('xman')){
        state.movies.push('xman')
      }else{
        state.movies.splice(-1,1)
      }
    },
    func3 (state){
      if (!state.books.author){
        Vue.set(state.books,'author','ark')
      }else{
        Vue.delete(state.books,'author')
      }
    }
  },
  actions: {
    
  },
  modules: {

  }
})
