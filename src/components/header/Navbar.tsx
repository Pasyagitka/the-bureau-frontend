import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="hidden lg:flex gap-12">
      <NavLink className="text-lg font-semibold text-primary lg:font-medium lg:text-[16px]" to="#">
        Home
      </NavLink>
      <NavLink
        className="hover:text-lime-500 active:text-lime-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
        to="#"
      >
        Features
      </NavLink>
      <NavLink
        className="hover:text-lime-500 active:text-lime-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
        to="#"
      >
        Pricing
      </NavLink>
      <NavLink
        className="hover:text-lime-500 active:text-lime-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
        to="#"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
