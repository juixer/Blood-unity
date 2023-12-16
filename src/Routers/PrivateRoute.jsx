import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";
import RingLoader from "react-spinners/ClipLoader";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation()
  if (loading) {
    return (
      <div className="flex justify-center items-center py-52">
        <RingLoader color="#ff0000" />
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
