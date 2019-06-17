export default function ({ $axios, store }) {
    $axios.onRequest(config => {
        // console.log("config"+store.$auth.$storage._state['_token.local'])
    })
}