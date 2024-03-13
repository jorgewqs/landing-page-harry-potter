import axios from 'axios'

const api = axios.create({
    baseURL: 'https://lp-harry-potter-api-ae08a50414ee.herokuapp.com/personagens'
})

export default api