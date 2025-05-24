import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4941/api/v1/',
    headers: {"Content-Type":"application/json"}
})

// Auth token interceptor by chat gpt --start--
client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['X-Authorization'] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
// Auth token interceptor by chat gpt --end--

export default client;