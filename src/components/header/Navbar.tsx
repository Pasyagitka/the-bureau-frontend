import { useAppDispatch, useAppSelector } from "@/hooks";
import { NOT_AUTHENTICATED } from "@/redux/actionTypes/auth";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const { auth } = useAppSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch({ type: NOT_AUTHENTICATED, payload: "" });
    navigate("/");
  };

  return (
    <nav className="  flex w-full ">
      <div className="flex mx-auto gap-12">
        <NavLink className="text-lg font-semibold text-primary lg:font-medium lg:text-[16px]" to="/">
          Главная
        </NavLink>
        <NavLink
          className="hover:text-lime-500 active:text-lime-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
          to="#"
        >
          Проектирование
        </NavLink>
        <NavLink
          className="hover:text-lime-500 active:text-lime-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
          to="#"
        >
          Изготовление
        </NavLink>
        <NavLink
          className="hover:text-lime-500 active:text-lime-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
          to="#"
        >
          Монтаж
        </NavLink>
      </div>
      <div className="flex gap-3">
        {auth.loggedIn ? (
          <button
            type="button"
            className="hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-lime-300 text-gray-500 active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base lg:inline-block lg:px-[16px] lg:py-[8px] lg:font-normal"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink
              to="/login"
              className="hidden bg-gray-100 hover:bg-gray-200 focus-visible:ring ring-lime-300 text-gray-800 active:text-gray-900 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base lg:inline-block lg:px-[16px] lg:py-[8px] lg:font-normal"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="hidden bg-gray-100 hover:bg-gray-200 focus-visible:ring ring-lime-300 text-gray-800 active:text-gray-980 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base lg:inline-block lg:px-[16px] lg:py-[8px] lg:font-normal"
            >
              Sign up
            </NavLink>
            <NavLink
              to="/register/brigadier"
              className="hidden bg-gray-100 hover:bg-gray-200 focus-visible:ring ring-lime-300 text-gray-800 active:text-gray-980 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base lg:inline-block lg:px-[16px] lg:py-[8px] lg:font-normal"
            >
              Join us
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
