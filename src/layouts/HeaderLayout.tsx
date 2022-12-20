import GradientBackground from "@/elements/gradientBackground/GradientBackground";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function HeaderLayout() {
  return (
    <div className="h-screen">
      <Header />
      <GradientBackground />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default HeaderLayout;
