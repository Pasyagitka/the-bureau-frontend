import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen h-max pt-[3vh]" style={{ backgroundColor: "#e9f0e6" }}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
