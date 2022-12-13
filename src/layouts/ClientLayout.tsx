import { Outlet } from "react-router-dom";

function ClientLayout() {
  return (
    <div className="flex w-full rounded containter p-12 flex-col">
      <Outlet />
    </div>
  );
}

export default ClientLayout;
