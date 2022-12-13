import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAllowed, children }) {
  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }
  return children || <Outlet />;
}

export default ProtectedRoute;
