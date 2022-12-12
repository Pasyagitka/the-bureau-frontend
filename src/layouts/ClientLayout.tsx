import AuthComponent from "@/auth/authComponent";
import { useAppSelector } from "@/hooks";
import { Outlet } from "react-router-dom";

function ClientLayout() {
  const auth = useAppSelector((state) => state.auth);
  console.log(auth);
  return (
    <AuthComponent role={auth.role} loggedIn={auth.loggedIn} accessRole="Client">
      <div className="flex w-full rounded containter p-12 flex-col">
        <Outlet />
      </div>
    </AuthComponent>
  );
}

export default ClientLayout;
