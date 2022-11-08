import axios from 'axios'

export const baseAxiosInstance = axios.create({
    baseURL: 'http://api.openweathermap.org',
    headers: {"Content-Type": "application/json",},
  });