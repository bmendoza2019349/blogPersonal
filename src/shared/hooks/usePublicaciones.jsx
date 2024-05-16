import { useState } from "react";
import toast from "react-hot-toast";
import { getPublicacion as getPublicacionRequest } from "../../services/api";

export const usePublicaciones = () => {
    const [ publicaciones, setPublicaciones ] = useState([])

    const getPublicaciones = async (isLogged = false) => {
        const publicacionesData = await getPublicacionRequest()
        
        if(publicacionesData.error){
            return toast.error(
                publicacionesData.e?.response?.data || 'Ocurrió un error al leer las publicaciones'
            )
        }

        if(isLogged){
            return setPublicaciones({
                publicaciones: publicacionesData.data.publication
            })
        }

        setPublicaciones({
            publicaciones: publicacionesData.data.publication

        }) 
    }

    return{
        getPublicaciones,
        isFetching: !Boolean(publicaciones),
        allPublicaciones: publicaciones?.publicaciones
        
    }
}