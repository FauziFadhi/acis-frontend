import Vuex from 'vuex'
import axios from 'axios'

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