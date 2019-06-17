export const getters = {
    loggedIn (state) {
        return state.loggedIn
    },
    user (state) {
        return state.user
    },
    token (state) {
        return state.token
    }
}

export const state = () =>({
    user: null,
    token: null,
    loggedIn: false
})

export const mutations = {
    setToken(state, token) {
      state.token = token
    }
  }