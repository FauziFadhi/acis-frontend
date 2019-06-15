export const getters = {
    loggedIn (state) {
        return state.loggedIn
    },
    user (state) {
        return state.user
    }
}

export const state = {
    user: null,
    loggedIn: false
}