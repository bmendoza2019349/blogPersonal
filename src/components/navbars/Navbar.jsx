import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks";


const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Navbar = () => {
  const { isLogged, logout, isAdmin } = useUserDetails();

  const navigate = useNavigate()

  const handleNavigateToAuthPage = () => {
    navigate('/auth')
  }

  const handleNavigateToSettingsPage = () => {
    navigate('/settings')
  }

  const handleNavigateToPublicacionesPage = () => {
    navigate('/publicaciones')
  }

  const handleNavigateToAddPublicacionPage = () => {
    navigate('/addpublicacion'); 
  };

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="nav-container">

      <div className="nav-buttons-container">
        <NavButton text="Publicaciones" onClickHandler={handleNavigateToPublicacionesPage} />

        {!isLogged ? (
          <NavButton text="Login" onClickHandler={handleNavigateToAuthPage} />
        ) : (
          <div>
            <NavButton text="Agregar Publicacion" onClickHandler={handleNavigateToAddPublicacionPage} />

            <NavButton text="My Account" onClickHandler={handleNavigateToSettingsPage} />
            <NavButton text="Logout" onClickHandler={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};
