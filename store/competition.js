export const getters = {
    listCompetitions (state) {
        return state.listCompetitions
    },
    getCompetition (state) {
        return state.getCompetition
    }
}

export const state = () =>({
    listCompetitions: [],
    getCompetition: {}
})

export const mutations = {
    setCompetitions (state, data) {
      state.listCompetitions = data
    },
    setCompetition (state, data) {
      state.getCompetition = data
    }
  }