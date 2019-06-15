import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      categories: [{
          "name": "GG"}
      ]
    }),
    mutations: {
        getCategories(state, payload){
            return state.categories = payload
        }
    },
  })
}

export default createStore