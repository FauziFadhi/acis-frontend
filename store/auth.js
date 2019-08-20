export const getters = {
    loggedIn (state) {
        return state.loggedIn
    },
    user (state) {
        return state.user
    },
    storageApi (state) {
        return state.storageApi
    },
    score (state) {
        return state.score
    },
    committee (state) {
        return state.committee
    }
}

export const state = () =>({
    user: null,
    committee: true,
    // storageApi: 'http://localhost:8000/',
    storageApi: 'https://acis-backend.herokuapp.com/',
    loggedIn: false,
    score: ['M',1,2,3,4,5,6,7,8,9,10,'X']
})

export const mutations = {
    setCommittee (state, data) {
      state.committee = data
    }
  }
