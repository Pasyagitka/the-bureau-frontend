import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/require-default-props
function NavbarItem({ to = "#", title }: { to?: string; title: string }) {
  return (
    <NavLink
      className="hover:text-lime-500 active:text-lime-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
      to={to}
    >
      {title}
    </NavLink>
  );
}

export default NavbarItem;
