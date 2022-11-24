import GradientBackground from "@/components/gradientBackground/GradientBackground";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function HeaderLayout() {
  return (
    <>
      <Header />
      <GradientBackground />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default HeaderLayout;
