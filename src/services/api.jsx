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

export const addComentario = async ({id}, data) => {
    try{
        return await apiClient.post(`/public/${id}/comments`, data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const updatePublicacion = async ({id},data) => {
    try{
        return await apiClient.put(`/public/${id}/updatePu`, data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}
export const deletePublicacion = async (id) => {
    try{
        return await apiClient.delete(`/public/${id}/pubDelete`)
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

export const getPublicacionSetting = async (id) => {
    try{
        return await apiClient.get(`/public/${id}/updatePu`)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getPublicDetails = async (id) => {
    try{
        return await apiClient.get(`/public/${id}`)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const deleteComentario = async (id, commentId) => {
    try{
        console.log(id, commentId)
        return await apiClient.delete(`/public/${id}/comments/${commentId}`)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}  

export const updateComentario = async (data) => {
    try{
        return await apiClient.put(`/public/${id}/comupdate/${commentId}`, data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getComentario = async (id) => {
    try{
        return await apiClient.post(`/public/${id}`)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

