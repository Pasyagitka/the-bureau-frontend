import AuthComponent from "@/auth/authComponent";
import { useAppSelector } from "@/hooks";
import { Outlet } from "react-router-dom";

function BrigadierLayout() {
  const auth = useAppSelector((state) => state.auth);
  console.log(auth);
  return (
    <AuthComponent role={auth.role} loggedIn={auth.loggedIn} accessRole="Brigadier">
      <div className="flex w-full rounded containter p-12 flex-col">
        <Outlet />
      </div>
    </AuthComponent>
  );
}

export default BrigadierLayout;
