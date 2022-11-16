import axios from 'axios'

const baseURL = 'https://foritcenter.herokuapp.com/api/client/'

const api = axios.create({
    baseURL,
    headers: {'Content-Type': 'application/json'}
})


export default api