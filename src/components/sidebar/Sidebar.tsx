import homeIcon from "icons/home.png";
import documentIcon from "icons/document.png";
import warehouseIcon from "icons/warehouse-1.png";
import clientIcon from "icons/person-male.png";
import brigadierIcon from "icons/worker-beard--v2.png";
import invoiceIcon from "icons/invoice.png";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="w-64 left-4 flex-0 mx-8" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white shadow-lg rounded">
        <ul className="space-y-2">
          <SidebarItem title="Главная" to="/admin/dashboard" icon={homeIcon} />
          <SidebarItem title="Заявки" to="/admin/requests" icon={documentIcon} />
          <SidebarItem title="Склад" to="/admin/storage" icon={warehouseIcon} />
          <SidebarItem title="Клиенты" to="/admin/clients" icon={clientIcon} />
          <SidebarItem title="Бригадиры" to="/admin/brigadiers" icon={brigadierIcon} />
          <SidebarItem title="Счета" to="/admin/invoices" icon={invoiceIcon} />
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
