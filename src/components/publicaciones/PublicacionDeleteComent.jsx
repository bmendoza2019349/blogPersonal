import { useState } from "react";
import { useDeleteComentario } from "../../shared/hooks/useDeleteComentario";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export const DeleteComentario = () => {
    const {id, commentId} = useParams();
    const { deleteComentario, isLoading } = useDeleteComentario();

    const handleDeleteComentario = () => {
        toast.promise(
            deleteComentario(id, commentId),
            {
                loading: 'Eliminando comentario...',
                success: 'Comentario eliminado exitosamente',
                error: (error) => `Ocurrió un error al eliminar el comentario: ${error}`
            }
        );
    };

    return (
        <div className='boton-eliminar'>
            <h2>Deseas Eliminarla?</h2>
        <button onClick={handleDeleteComentario} disabled={isLoading}>Eliminar</button>
        </div>
    );
};