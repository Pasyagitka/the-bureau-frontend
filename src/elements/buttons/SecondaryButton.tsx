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
      className="hidden bg-gray-100 hover:bg-gray-200 focus-visible:ring ring-lime-300 text-gray-800 active:text-gray-900 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base lg:inline-block lg:px-[16px] lg:py-[8px] lg:font-normal"
    >
      {title}
    </NavLink>
  ) : (
    <button
      type="button"
      className="hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-lime-300 text-gray-500 active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base lg:inline-block lg:px-[16px] lg:py-[8px] lg:font-normal"
      onClick={onClick}
    >
      Выход
    </button>
  );
}

export default SecondaryButton;
