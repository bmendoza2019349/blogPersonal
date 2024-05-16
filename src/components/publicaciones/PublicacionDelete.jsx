import '../../pages/dashboard/dashboardPage.css'
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useDeletePublicacion } from "../../shared/hooks/useDeletePublicacion";

export const DeletePublicacion = () => {
    const {id} = useParams();
    const {deletePublicacion, isLoading} = useDeletePublicacion();

    const handleDeletePublicacion = () => {
        toast.promise(
            deletePublicacion(id),
            {
                loading: 'Eliminando publicacion...',
                success: 'Publicacion eliminada exitosamente',
                error: (error) => `Ocurrió un error al eliminar la publicacion: ${error}`
            }
        );
    };

    return(
        <div className='boton-eliminar'>
            <h2>Deseas Eliminarla?</h2>
            <button onClick={handleDeletePublicacion} disabled={isLoading}>Eliminar Publicacion</button>
        </div>
        
    )
}