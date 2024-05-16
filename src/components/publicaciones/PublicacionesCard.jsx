import "../../pages/dashboard/dashboardPage.css"

const PublicacionIma = ({url}) => {
    return(
        <div className="publicacion-ima-container">
            <img src={url} width='25%' height='25%' alt="Default publicacion" />
        </div>
    )
}

export const PublicacionesCard = ({
    titulo,
    id,
    descripcion,
    autor,
    materia,
    navigateToPublicacionHandler
}) => {
    const handleNavigate = () => {
        navigateToPublicacionHandler(id)
    }

    return(
        <div className="publicaciones-card" onClick={handleNavigate}>
            <span className="publicaciones-card-title">Actividad: {titulo}</span>
            <span className="publicaciones-card-title">Materia: {materia}</span>
            <span className="publicaciones-card-title">Autor: {autor}</span>
        </div>
    )
}