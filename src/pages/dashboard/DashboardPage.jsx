import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { useUserDetails } from "../../shared/hooks";
import { usePublicaciones } from "../../shared/hooks/usePublicaciones"

export const DashboardPage = () => {
  const { getPublicaciones, allPublicaciones, isFetching } = usePublicaciones();
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getPublicaciones(isLogged);

  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  console.log("Publicaciones: ", allPublicaciones); // Para verificar que las publicaciones estén llegando

  return (
    <div className="dashboard-container">
      <Navbar />
      <Content publicaciones={allPublicaciones || []} getPublicaciones={getPublicaciones} />
    </div>
  );
};