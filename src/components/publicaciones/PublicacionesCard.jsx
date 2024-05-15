import "../../pages/dashboard/dashboardPage.css"

export const PublicacionesCard = ({
    titulo,
    id,
    descripcion,
    autor,
    navigateToPublicacionHandler
}) => {
    const handleNavigate = () => {
        navigateToPublicacionHandler(id)
    }

    return(
        <div className="publicaciones-card" onClick={handleNavigate}>
            <span className="publicaciones-card-title">Actividad: {titulo}</span>
            <span className="publicaciones-card-title">Descripcion: {descripcion}</span>
            <span className="publicaciones-card-title">Autor: {autor}</span>
        </div>
    )
}