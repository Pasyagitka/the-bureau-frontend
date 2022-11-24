import { NavLink } from "react-router-dom";

function Button({ text, to }) {
  return (
    <NavLink
      to={to}
      type="button"
      className="
      bg-lime-600 focus:ring-lime-300  text-white
      text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg
      px-2 py-2 w-36 transition ease-in duration-200 hover:bg-lime-400"
    >
      {text}
    </NavLink>
  );
}

export default Button;
