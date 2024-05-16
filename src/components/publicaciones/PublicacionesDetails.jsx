import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks";
import axios from 'axios';
const PublicacionIma = ({ url }) => {
    return (
        <div className="publicacion-ima-container">
            <img src={url} width='100%' height='100%' alt="Default publicacion" />
        </div>
    )
}

export const PublicacionDescription = ({
    titulo,
    descripcion,
    fechaPublicacion,
    autor,
    img,
    comentarios,
    id
}) => {
    const navigate = useNavigate();

    const handleNavigateToAddComentarioPage = () => {
        navigate('./comments');
    };
    const handleNavigateToDeleteComentarioPage = (commentId) => {
        navigate(`./comments/${commentId}`);
    };
    const handleNavigateToEditPublicPage = () => {
        navigate('./updatePu');
    };
    const handleNavigateToDeletePublicacionPage = () => {
        navigate('./pubDelete');
    };


    return (
        <div className="public-container">
            <div className="public-container-img"><PublicacionIma url={img} /></div>

            <div className="autor-fecha-container">
                <span className="public-autor">
                    Autor: {autor}
                </span>
                <span className="public-fechaPublic">
                    Fecha de Publicacion: {fechaPublicacion}
                </span>
            </div>

            <span className="public-title">Actividad: {titulo}</span>

            <span className="public-description">{descripcion}</span>
            <div className="comentario-buttons-container">
                {/*<button onClick={handleNavigateToEditPublicPage}>Editar Publicacion</button>*/}
                <button onClick={handleNavigateToDeletePublicacionPage}>Eliminar Publicacion</button>
            </div>

            <div className="comentarios-container">
                <h3>Comentarios</h3>
                <div className="comentario-buttons-container">
                    <button onClick={handleNavigateToAddComentarioPage}>Agregar Comentario</button>
                </div>
                <ul>
                    {comentarios && comentarios.map((comentario, index) => (
                        <li key={comentario._id}>
                            <div className="autor-fecha-container">
                                <strong>Autor: {comentario.usuario}</strong> Fecha de Publicacion: {comentario.fechaHora}
                            </div>
                            <div>{comentario.texto}</div>
                            <div className="comentario-buttons-container">
                                <button onClick={() => handleNavigateToDeleteComentarioPage(comentario._id)}>eliminar</button>
                               {/*} <button onClick={() => handleUpdateComentario(comentario._id)}>editar</button>*/}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}