import axios from 'axios';

const api = axios.create({
    baseURL: 'http://de796f33.ngrok.io',
});

export default api;