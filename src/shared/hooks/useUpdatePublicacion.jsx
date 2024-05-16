import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getPublicacionSetting, updatePublicacion } from "../../services";

export const usePublicacionSettings = (id) => {
    const [publicacionSettings, setPublicacionSettings] = useState()

console.log('llego a use' )

    const fetchPublicacionSettings = async (id) => {

        const response = await getPublicacionSetting(id);

        console.log('llego a fetch', response )
        
        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Ocurrió un error al obtener la data de la publicacion'
            )
        }

        setPublicacionSettings({
            id: response.data.id,
            img: response.data.img,
            titulo: response.data.titulo,
            descripcion: response.data.descripcion,
            materia: response.data.materia
        })
        console.log(setPublicacionSettings)
    }

    const saveSettings = async (data) => {
        const response = await updatePublicacion(data);
        console.log(data)
        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Ocurrió un error al actualizar la data de la publicacion'
            )
        }

        toast.success('Información actualizada exitosamente')
    }
 
    useEffect(() =>{
        fetchPublicacionSettings()
    }, [id])

    return{
        isFetching: !publicacionSettings,
        publicacionSettings,
        saveSettings
    }
}