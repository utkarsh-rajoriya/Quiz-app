import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const login = (username ,  useremail) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("useremail", useremail);
    setIsAuthenticated(true);
    navigate("/hero");
  };

  const logout = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
