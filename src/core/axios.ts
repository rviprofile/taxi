import axios from 'axios';
import { isTokenExpired } from 'utils/tokens';


const isDev = process.env.NODE_ENV === 'development'

export const API = axios.create({
	baseURL: isDev ? process.env.NEXT_PUBLIC_DEV_API_BASE : process.env.NEXT_PUBLIC_API_BASE,
	withCredentials: true
}) 

export const unprotectedApi = axios.create({
	baseURL: isDev ? process.env.NEXT_PUBLIC_DEV_API_BASE : process.env.NEXT_PUBLIC_API_BASE,
	withCredentials: true
}) 

API.interceptors.request.use((config) => {
const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const sessid = localStorage.getItem('sessid');

if (accessToken && !isTokenExpired(accessToken) && config.headers) {
	config.headers.Authorization = `Bearer ${accessToken}`;
} else if (refreshToken && !isTokenExpired(refreshToken) && config.headers) {
	config.headers.Authorization = `Bearer ${refreshToken}`;
} 

if (sessid && config.headers) {
	config.headers['x-sessid'] = sessid;
}

return config;
}, (error) => {
	return Promise.reject(error);
});
  
API.interceptors.response.use((response) => {
const newAccessToken = response.headers['x-jwt-access'];
const newRefreshToken = response.headers['x-jwt-refresh'];
const sessid = response.headers['x-sessid'];

if (newAccessToken && newRefreshToken) {
	localStorage.setItem('accessToken', newAccessToken);
	localStorage.setItem('refreshToken', newRefreshToken);
}

if (sessid) {
	localStorage.setItem('sessid', sessid)
}

return response;
}, (error) => {
// const newAccessToken = error.response.headers['x-jwt-access'];
// const newRefreshToken = error.response.headers['x-jwt-refresh'];

// if (newAccessToken && newRefreshToken) {
// 	localStorage.setItem('accessToken', newAccessToken);
// 	localStorage.setItem('refreshToken', newRefreshToken);
// }

return Promise.reject(error);
});

export default API;
