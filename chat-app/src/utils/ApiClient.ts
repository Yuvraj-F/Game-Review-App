import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4941/api/v1/',
    headers: {"Content-Type":"application/json"}
})

export default client;