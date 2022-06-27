import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    // baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        // 'API-KEY': '34a6ba5d-948d-420a-986a-4ade213dda25'
    }
})