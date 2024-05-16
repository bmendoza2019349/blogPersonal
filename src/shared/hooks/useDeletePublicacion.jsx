import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePublicacion as deletePublicacionRequest } from "../../services";
import toast from "react-hot-toast";

export const useDeletePublicacion = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const deletePublicacion = async (id) => {
        setIsLoading(true);

        try {
            const response = await deletePublicacionRequest(id);
            console.log(response)

            setIsLoading(false);

            if (response.error) {
                console.error(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al eliminar la publicacion, intenta de nuevo');
            }

            navigate('/publicaciones')
            window.location.reload();
            toast.success('Publicacion eliminada exitosamente');
        } catch (error) {
            setIsLoading(false);
            console.error('Delete publicacion failed', error);
            toast.error('Ocurrió un error al eliminar la publicacion, intenta de nuevo');
        }
    };
    return{
        deletePublicacion,
        isLoading
    }
}