import SecondaryButton from "@/elements/buttons/SecondaryButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { deleteToken } from "@/redux/actions/auth";
import { NOT_AUTHENTICATED } from "@/redux/actionTypes/auth";
import { persistor } from "@/redux/store";

function Navbar() {
  const { auth } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await persistor.purge();
    deleteToken();
    dispatch({ type: NOT_AUTHENTICATED, payload: "" });
  };

  const returnButton = () => {
    if (auth.user.role === "Admin") {
      return <SecondaryButton title="Панель администратора" to="/admin" isLink />;
    }
    if (auth.user.role === "Brigadier") {
      return <SecondaryButton title="Личный кабинет" to="/brigadier" isLink />;
    }
    return <SecondaryButton title="Личный кабинет" to="/client" isLink />;
  };

  return (
    <nav className="flex-1 flex w-full ">
      <div className="flex mx-auto gap-12" />
      <div className="flex gap-3">
        {auth.user ? (
          <>
            {returnButton()}
            <SecondaryButton title="Выход" onClick={handleLogout} isLink={false} />
          </>
        ) : (
          <>
            <SecondaryButton to="/login" title="Вход" isLink />
            <SecondaryButton to="/register" title="Создать аккаунт" isLink />
            <SecondaryButton to="/register/brigadier" title="Стать партнером" isLink />
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
