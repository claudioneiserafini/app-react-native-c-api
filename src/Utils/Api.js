import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-teste-json-server.herokuapp.com',
    timeout: 5000
})

export default api;