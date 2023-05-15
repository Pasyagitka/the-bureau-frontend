import GradientBackground from "@/elements/gradientBackground/GradientBackground";
import { Outlet } from "react-router-dom";

function ClientLayout() {
  return (
    <div className="flex w-full rounded containter lg:p-12 flex-col sm:p-0 md:p-0">
      <GradientBackground />

      <Outlet />
    </div>
  );
}

export default ClientLayout;
