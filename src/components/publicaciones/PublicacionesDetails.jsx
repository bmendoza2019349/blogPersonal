import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks";
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
}) => {
    const navigate = useNavigate();

    const handleNavigateToAddComentarioPage = () => {
        navigate('./comments');
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


            <div className="comentarios-container">
                <h3>Comentarios</h3>
                <button onClick={handleNavigateToAddComentarioPage}>Agregar Comentario</button>
                <ul>
                    {comentarios && comentarios.map((comentario, index) => (
                        <li key={comentario._id}>
                            <div className="autor-fecha-container">
                                <strong>Autor: {comentario.usuario}</strong> Fecha de Publicacion: {comentario.fechaHora}
                            </div>
                            <div>{comentario.texto}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}