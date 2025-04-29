// ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = localStorage.getItem("token"); // or use context/auth state

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
