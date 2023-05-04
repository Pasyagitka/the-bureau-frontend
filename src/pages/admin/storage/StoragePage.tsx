import Tab from "@/components/admin/storage/tab/Tab";
import { Outlet } from "react-router-dom";

function StoragePage() {
  return (
    <div className="container w-full h-full bg-white p-12 flex-col flex rounded">
      <Tab />
      <Outlet />
    </div>
  );
}

export default StoragePage;
