import "../../pages/dashboard/dashboardPage.css"
import { useNavigate } from "react-router-dom";
import { PublicacionesCard } from "./PublicacionesCard";

export const Publicaciones = ({ publicaciones }) => {
    const navigate = useNavigate()

    const handleNavigateToPublicacion = (id) => {
        navigate(`/public/${id}`)
    }

    return (
        <div className="publicaciones-container">
            {publicaciones.map((p) => (
                <PublicacionesCard
                    key={p._id}
                    id={p._id}
                    titulo={p.titulo}
                    materia={p.materia}
                    autor={p.autor}
                    navigateToPublicacionHandler={handleNavigateToPublicacion}
                />
            ))}
        </div>
    )
}