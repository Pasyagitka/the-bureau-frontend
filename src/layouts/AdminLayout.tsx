import AuthComponent from "@/auth/authComponent";
import { useAppSelector } from "@/hooks";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function AdminLayout() {
  const auth = useAppSelector((state) => state.auth);
  console.log(auth);
  return (
    <div className="flex">
      <AuthComponent role={auth.role} loggedIn={auth.loggedIn} accessRole="Admin">
        <Sidebar />
        <Outlet />
      </AuthComponent>
    </div>
  );
}

export default AdminLayout;
