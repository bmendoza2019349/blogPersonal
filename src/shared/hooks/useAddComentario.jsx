import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addComentario as addComentarioRequest } from "../../services";
import toast from "react-hot-toast";

export const useAddComentario = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const comments = async (id, texto) => {
        setIsLoading(true)
        try {

            const response = await addComentarioRequest(
                {id},
                {texto}
            )

            setIsLoading(false)
            if (response.error) {
                console.log(response.error)
                return toast.error(response.e?.response?.data || 'Ocurrió un error al comentar, intenta de nuevo')

            }
            
            navigate(`/public/${id}`)

        } catch (error) {
            setIsLoading(false);
            console.error('Add coment failed', error);
            toast.error('Ocurrió un error al agregar comentario, intenta de nuevo');
        }
    };

    return {
        comments,
        isLoading
    }
}