import axios from 'axios'

const baseUrl = 'https://foritcenter.herokuapp.com/api/client/'

const http = axios.create({
    baseURL,
    headers: {'Content-Type': 'application/json'}
})


export default http