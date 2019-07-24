export const getters = {
    loggedIn (state) {
        return state.loggedIn
    },
    user (state) {
        return state.user
    },
    storageApi (state) {
        return state.storageApi
    }
}

export const state = () =>({
    user: null,
    // storageApi: 'http://localhost:8000/',
    storageApi: 'https://acis-backend.herokuapp.com/',
    loggedIn: false
})