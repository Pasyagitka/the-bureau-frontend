import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function HeaderLayout() {
  return (
    <div className="min-h-screen h-max">
      <Header />
      {/* <GradientBackground /> */}
      <Outlet />
    </div>
  );
}

export default HeaderLayout;
