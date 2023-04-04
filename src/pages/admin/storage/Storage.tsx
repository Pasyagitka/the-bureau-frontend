import Tab from "@/elements/tab/Tab";
import { Outlet } from "react-router-dom";

function Storage() {
  return (
    <div className="container w-full h-full bg-white p-12 flex-col flex rounded">
      <Tab />
      <Outlet />
    </div>
  );
}

export default Storage;
