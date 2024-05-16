import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteComentario as deleteComentarioRequest } from "../../services";
import toast from "react-hot-toast";

export const useDeleteComentario = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const deleteComentario = async (id, commentId) => {
        setIsLoading(true);
        try {
            const response = await deleteComentarioRequest(id, commentId);
            console.log(response)
            setIsLoading(false);
            if (response.error) {
                console.error(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al eliminar el comentario, intenta de nuevo');
            }

            navigate(`/public/${id}`)

            toast.success('Comentario eliminado exitosamente');
        } catch (error) {
            setIsLoading(false);
            console.error('Delete comentario failed', error);
            toast.error('Ocurrió un error al eliminar el comentario, intenta de nuevo');
        }
    };

    return {
        deleteComentario,
        isLoading
    };
};