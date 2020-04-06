import axios from 'axios';

let token;

const Api = axios.create({
    baseURL: 'http://localhost:5000'
});

Api.interceptors.request.use(async config => {
    token = localStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

Api.interceptors.response.use(
    res => res,
    error => {
//        token && handleError(error);
        if (error.message === "Network Error") {
            error = {response: {data: {errors: {} }, status:500 }}
        }
        return Promise.reject(error);
    }
);

export default Api;