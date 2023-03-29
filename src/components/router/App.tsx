import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/common/Login";
import NotFound from "@/pages/common/NotFound";
import Home from "@/pages/common/Home";
import RegisterClient from "@/pages/common/RegisterClient";
import Dashboard from "@/pages/admin/Dashboard";
import Storage from "@/pages/admin/storage/Storage";
import Accessories from "@/pages/admin/storage/Accessories";
import Equipment from "@/pages/admin/storage/Equipment";
import Tools from "@/pages/admin/storage/Tools";
import Brigadiers from "@/pages/admin/Brigadiers";
import Clients from "@/pages/admin/Clients";
import Requests from "@/pages/admin/Requests";
import ClientHome from "@/pages/client/ClientHome";
import BrigadierHome from "@/pages/brigadier/BrigadierHome";
import { useAppSelector } from "@/hooks";
import BrigadierLayout from "@/layouts/BrigadierLayout";
import RegisterBrigadier from "@/pages/common/RegisterBrigadier";
import ProtectedRoute from "@/layouts/ProtectedRoute";
import Invoices from "@/pages/admin/Invoices";
import HeaderLayout from "../../layouts/HeaderLayout";
import AdminLayout from "../../layouts/AdminLayout";
import ClientLayout from "../../layouts/ClientLayout";
import LeaveRequestForm from "../client/leaveRequestForm/LeaveRequestForm";
import RequestDetails from "../request/requestDetails/RequestDetails";
import EditRequestAdmin from "../admin/editRequestAdmin/EditRequestAdmin";
import ClientDetails from "../clientDetails/ClientDetails";
import CreateToolForm from "../admin/storage/tools/CreateToolForm";
import EditToolForm from "../admin/storage/tools/EditToolForm";
import EditBrigadierDetails from "../brigadier/editBrigadierDetails/EditBrigadierDetails";
import EditRequestBrigadier from "../brigadier/editRequestBrigadier/EditRequestBrigadier";
import CreateEquipmentForm from "../admin/storage/equipment/CreateEquipmentForm";
import CreateAccessoryForm from "../admin/storage/accessoriesList/CreateAccessoryForm";
import EditAccessoryForm from "../admin/storage/accessoriesList/EditAccessoryForm";
import EditEquipmentForm from "../admin/storage/equipment/EditEquipmentForm";
import EditClientDetails from "../client/editClientDetails/EditClientDetails";

function App() {
  const user = useAppSelector((state) => state.auth.user);

  const checkAllowed = (rolename: string) => !!user && user.role === rolename;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterClient />} />
        <Route path="/register/brigadier" element={<RegisterBrigadier />} />

        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute isAllowed={checkAllowed("Admin")}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<Navigate to="requests" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="brigadiers" element={<Brigadiers />} />
            <Route path="invoices" element={<Invoices />} />
            {/* <Route path="brigadiers/:id" element={<BrigadierDetails />} /> */}
            <Route path="clients" element={<Clients />} />
            <Route path="clients/:id" element={<ClientDetails />} />
            <Route path="requests" element={<Requests />} />
            <Route path="requests/:id" element={<RequestDetails />} />
            <Route path="requests/:id/edit" element={<EditRequestAdmin />} />

            <Route path="storage" element={<Storage />}>
              <Route path="" element={<Navigate to="accessories" />} />
              <Route path="accessories" element={<Accessories />} />
              <Route path="accessories/create" element={<CreateAccessoryForm />} />
              <Route path="accessories/update/:id" element={<EditAccessoryForm />} />
              <Route path="tools" element={<Tools />} />
              <Route path="tools/create" element={<CreateToolForm />} />
              <Route path="tools/update/:id" element={<EditToolForm />} />
              <Route path="equipment" element={<Equipment />} />
              <Route path="equipment/create" element={<CreateEquipmentForm />} />
              <Route path="equipment/update/:id" element={<EditEquipmentForm />} />
            </Route>
          </Route>

          <Route
            path="/client"
            element={
              <ProtectedRoute isAllowed={checkAllowed("Client")}>
                <ClientLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<ClientHome />} />
            <Route path="update/:id" element={<EditClientDetails />} />
            <Route path="leave-request" element={<LeaveRequestForm />} />
          </Route>

          <Route
            path="/brigadier"
            element={
              <ProtectedRoute isAllowed={checkAllowed("Brigadier")}>
                <BrigadierLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<BrigadierHome />} />
            <Route path="update/:id" element={<EditBrigadierDetails />} />
            <Route path="requests/:id/edit" element={<EditRequestBrigadier />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
