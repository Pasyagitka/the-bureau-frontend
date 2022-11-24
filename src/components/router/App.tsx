import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import Login from "@/pages/common/Login";
import NotFound from "@/pages/common/NotFound";
import Home from "@/pages/common/Home";
import RegisterClient from "@/pages/common/RegisterClient";
import Dashboard from "@/pages/admin/Dashboard";
import ClientRequests from "@/pages/client/ClientRequests";
import Storage from "@/pages/admin/storage/Storage";
import Accessories from "@/pages/admin/storage/Accessories";
import Equipment from "@/pages/admin/storage/Equipment";
import Tools from "@/pages/admin/storage/Tools";
import Brigadiers from "@/pages/admin/Brigadiers";
import HeaderLayout from "../../layouts/HeaderLayout";
import AdminLayout from "../../layouts/AdminLayout";
import ClientLayout from "../../layouts/ClientLayout";
import LeaveRequestForm from "../leaveRequestForm/LeaveRequestForm";
import Clients from "@/pages/admin/Clients";

function App() {
  const app = useAppSelector((state) => state.app);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterClient />} />
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<Navigate to="home" />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="brigadiers" element={<Brigadiers />} />
            <Route path="clients" element={<Clients />} />

            <Route path="storage" element={<Storage />}>
              <Route path="" element={<Navigate to="accessories" />} />
              <Route path="accessories" element={<Accessories />} />
              <Route path="tools" element={<Tools />} />
              <Route path="equipment" element={<Equipment />} />
            </Route>
          </Route>

          <Route path="/client" element={<ClientLayout />}>
            <Route path="" element={<Navigate to="requests" />} />
            <Route path="requests" element={<ClientRequests />} />
            <Route path="leave-request" element={<LeaveRequestForm />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
