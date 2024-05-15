import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/blogSystem/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')
    
        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export const login = async (data) => {
    try{
        return await apiClient.post('/auth/login', data)
    }catch(e){
        return{
            error: true,
            e 
        }
    }
}

export const register = async (data) => {
    try{
        return await apiClient.post('/user/register', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const userUpdate = async (data) => {
    try{
        return await apiClient.post('/user/updateuser', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const addpublicacion = async (data) => {
    try{
        return await apiClient.post('/public', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const updatePublicacion = async (data) => {
    try{
        return await apiClient.put('/public', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}
export const deletePublicacion = async (data) => {
    try{
        return await apiClient.delete('/public', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getPublicacion = async () => {
    try{
        return await apiClient.get('/public')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const addComentario = async (data) => {
    try{
        return await apiClient.post('/public/comments', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}
export const deleteComentario = async (data) => {
    try{
        return await apiClient.post(`/public/pub/${id}/comdelete/${commentId}`, data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}
export const updateComentario = async (data) => {
    try{
        return await apiClient.post(`/public/pub/${id}/comupdate/${commentId}`, data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getComentario = async (data) => {
    try{
        return await apiClient.post(`/public/commentspublic/${id}`, data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getPublicDetails = async (id) => {
    try{
        return await apiClient.get(`/public/${id}`, data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}