import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/common/Login";
import NotFound from "@/pages/common/NotFound";
import Home from "@/pages/common/Home";
import RegisterClient from "@/pages/common/RegisterClient";
import DashboardPage from "@/pages/admin/DashboardPage";
import StoragePage from "@/pages/admin/storage/StoragePage";
import AccessoriesPage from "@/pages/admin/storage/AccessoriesPage";
import EquipmentPage from "@/pages/admin/storage/EquipmentPage";
import ToolsPage from "@/pages/admin/storage/ToolsPage";
import BrigadiersPage from "@/pages/admin/BrigadiersPage";
import ClientsPage from "@/pages/admin/ClientsPage";
import RequestsPage from "@/pages/admin/RequestsPage";
import ClientHomePage from "@/pages/client/ClientHomePage";
import BrigadierHomePage from "@/pages/brigadier/BrigadierHomePage";
import { useAppSelector } from "@/hooks";
import BrigadierLayout from "@/layouts/BrigadierLayout";
import RegisterBrigadier from "@/pages/common/RegisterBrigadier";
import ProtectedRoute from "@/layouts/ProtectedRoute";
import InvoicesPage from "@/pages/admin/InvoicesPage";
import GatewayTimeout from "@/pages/common/GatewayTimeout";
import CreateInvoicePage from "@/pages/brigadier/CreateInvoicePage";
import SettingsPage from "@/pages/admin/SettingsPage";
import EditInvoiceStatusPage from "@/pages/admin/EditInvoicePage";
import CreateAccessoryPage from "@/pages/admin/storage/CreateAccessoryPage";
import EditEquipmentPage from "@/pages/admin/storage/EditEquipmentPage";
import CreateToolPage from "@/pages/admin/storage/CreateToolPage";
import AdminLayout from "@/layouts/AdminLayout";
import ClientLayout from "@/layouts/ClientLayout";
import HeaderLayout from "@/layouts/HeaderLayout";
import ApproveRequestStatusAdminPage from "@/pages/admin/ApproveRequestStatusPage";
import BrigadierDetailsPage from "@/pages/admin/BrigadierDetailsPage";
import ClientDetailsPage from "@/pages/admin/ClientDetailsPage";
import EditRequestAdminPage from "@/pages/admin/EditRequestPage";
import RequestDetailsPage from "@/pages/admin/RequestDetails";
import CreateEquipmentPage from "@/pages/admin/storage/CreateEquipmentPage";
import EditAccessoryPage from "@/pages/admin/storage/EditAccessoryPage";
import EditToolPage from "@/pages/admin/storage/EditToolPage";
import EditBrigadierDetailsPage from "@/pages/brigadier/EditBrigadierDetailsPage";
import EditRequestByBrigadierPage from "@/pages/brigadier/EditRequestByBrigadierPage";
import EditClientDetailsPage from "@/pages/client/EditClientDetailsPage";
import LeaveRequestPage from "@/pages/client/LeaveRequestPage";
import EditInvoicePage from "@/pages/brigadier/EditInvoicePage";
import InvoiceDetailsPage from "@/pages/brigadier/InvoiceDetailsPage";
import CommitPaidInvoicePage from "@/pages/brigadier/CommitPaidInvoicePage";
import ApproveInvoiceStatusPage from "@/pages/admin/ApproveInvoiceStatusPage";
import Statistics from "@/components/admin/statistics/Statistics";
import ForgotPassword from "@/pages/common/ForgotPassword";

function App() {
  const user = useAppSelector((state) => state.auth.user);

  const checkAllowed = (rolename: string) => !!user && user.role === rolename;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
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
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="home" element={<DashboardPage />} />
            <Route path="brigadiers" element={<BrigadiersPage />} />
            <Route path="brigadiers/:id" element={<BrigadierDetailsPage />} />
            <Route path="invoices" element={<InvoicesPage />} />
            <Route path="invoices/:id/approve" element={<ApproveInvoiceStatusPage />} />
            <Route path="invoices/:id" element={<InvoiceDetailsPage />} />
            <Route path="invoices/:id/update" element={<EditInvoiceStatusPage />} />
            <Route path="settings" element={<SettingsPage />} />
            {/* <Route path="brigadiers/:id" element={<BrigadierDetails />} /> */}
            <Route path="clients" element={<ClientsPage />} />
            <Route path="clients/:id" element={<ClientDetailsPage />} />
            <Route path="requests" element={<RequestsPage />} />
            <Route path="requests/:id" element={<RequestDetailsPage />} />
            <Route path="requests/:id/edit" element={<EditRequestAdminPage />} />
            <Route path="requests/:id/approve" element={<ApproveRequestStatusAdminPage />} />

            <Route path="storage" element={<StoragePage />}>
              <Route path="" element={<Navigate to="accessories" />} />
              <Route path="accessories" element={<AccessoriesPage />} />
              <Route path="accessories/create" element={<CreateAccessoryPage />} />
              <Route path="accessories/update/:id" element={<EditAccessoryPage />} />
              <Route path="tools" element={<ToolsPage />} />
              <Route path="tools/create" element={<CreateToolPage />} />
              <Route path="tools/update/:id" element={<EditToolPage />} />
              <Route path="equipment" element={<EquipmentPage />} />
              <Route path="equipment/create" element={<CreateEquipmentPage />} />
              <Route path="equipment/update/:id" element={<EditEquipmentPage />} />
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
            <Route path="" element={<ClientHomePage />} />
            <Route path="update" element={<EditClientDetailsPage />} />
            <Route path="leave-request" element={<LeaveRequestPage />} />
          </Route>

          <Route
            path="/brigadier"
            element={
              <ProtectedRoute isAllowed={checkAllowed("Brigadier")}>
                <BrigadierLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<BrigadierHomePage />} />
            <Route path="update" element={<EditBrigadierDetailsPage />} />
            <Route path="requests/:id/edit" element={<EditRequestByBrigadierPage />} />
            <Route path="invoices/create" element={<CreateInvoicePage />} />
            <Route path="invoices/:id/update" element={<EditInvoicePage />} />
            <Route path="invoices/:id" element={<InvoiceDetailsPage />} />
            <Route path="invoices/:id/commit" element={<CommitPaidInvoicePage />} />
          </Route>
        </Route>
        <Route path="/gatewayTimeout" element={<GatewayTimeout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
