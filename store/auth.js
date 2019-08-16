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
    }
}

export const state = () =>({
    user: null,
    storageApi: 'http://localhost:8000/',
    // storageApi: 'https://acis-backend.herokuapp.com/',
    loggedIn: false,
    score: ['M',1,2,3,4,5,6,7,8,9,10,'X']
})