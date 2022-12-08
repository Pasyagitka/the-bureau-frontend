import Footer from "@/components/footer/Footer";
import GradientBackground from "@/elements/gradientBackground/GradientBackground";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function HeaderLayout() {
  return (
    <>
      <Header />
      <GradientBackground />
      <Outlet />
      <Footer />
    </>
  );
}

export default HeaderLayout;
