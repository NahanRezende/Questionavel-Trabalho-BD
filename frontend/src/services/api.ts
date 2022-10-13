import axios from 'axios';

const url = 'http://localhost:4003';

const api = axios.create({
  baseURL: url,
});

export default api;
