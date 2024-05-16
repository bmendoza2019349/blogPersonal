import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PublicacionDescription } from "./PublicacionesDetails";
import { usePublicacionDetails } from "../../shared/hooks";
import { LoadingSpinner } from '../LoadingSpinner'

export const PublicacionView = () => {
    const { isFetching, getPublicDetails, publicacionesDetails} = usePublicacionDetails();

    const { id } = useParams();

    useEffect(() => {
        getPublicDetails(id);
    }, []);

    if(isFetching){
        return <LoadingSpinner/>;
    }

    const publicacion = publicacionesDetails.data.publicacion;

    return (
        <div className="channel-container">
            <div className="channel-video-description-section">
                <PublicacionDescription
                    id={publicacion._id}
                    img={publicacion.img}
                    autor={publicacion.autor}
                    fechaPublicacion={publicacion.fechaPublicacion}
                    titulo={publicacion.titulo}
                    descripcion={publicacion.descripcion}
                    comentarios={publicacion.comentarios}
                />
            </div>
        </div>
    );
}