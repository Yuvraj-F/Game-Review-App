import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:4941/api/v1/',
    headers: {"Content-Type":"application/json"}
})

export default client;