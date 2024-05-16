import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addpublicacion as  addpublicacionRequest } from "../../services";
import toast from "react-hot-toast";

export const useAddPublicacion = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const addpublicacion = async (img, titulo, descripcion, materia) => {
        setIsLoading(true)
        try {
            const response = await addpublicacionRequest({
                img,
                titulo,
                descripcion,
                materia
            });
            console.log(response)
            setIsLoading(false)

            if(response.error){
                console.log(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al registrar la publicacion, intenta de nuevo')
            }
            navigate('/publicaciones');
            window.location.reload();
        } catch (error) {
            setIsLoading(false);
            console.error('Add publicacion failed', error);
            toast.error('Ocurrió un error al agregar publicacion, intenta de nuevo');
        }
    };

    return{
        addpublicacion,
        isLoading
    }
}