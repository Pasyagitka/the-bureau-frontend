/* eslint-disable react/require-default-props */
import { NavLink } from "react-router-dom";

function SecondaryButton({
  to = "#",
  title,
  isLink,
  onClick,
}: {
  to?: string;
  title: string;
  isLink: boolean;
  onClick?: () => void;
}) {
  return isLink ? (
    <NavLink
      to={to}
      className="bg-gray-100 hover:bg-gray-200 focus-visible:ring ring-lime-300 text-gray-800 active:text-gray-900 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base inline-block px-[16px] py-[8px] font-normal"
    >
      {title}
    </NavLink>
  ) : (
    <button
      type="button"
      className="bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-lime-300 text-gray-500 active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base px-[16px] py-[8px] font-normal"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default SecondaryButton;
