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
    storageApi: 'https://acis-api.herokuapp.com/storage/',
    loggedIn: false
})