import { useAuth } from "./AuthContext";
import { Navigate} from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
    return children;
};

export default ProtectedRoutes;
