import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies:['ironman','superman','spiderman']
  },
  mutations: {
    func1 (state){
      state.movies.splice(2,0,'usa captain')
    },
    func2 (state){
      state.movies.splice(-1,1)
    }
  },
  actions: {
    
  },
  modules: {

  }
})
