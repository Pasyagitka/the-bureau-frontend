import { Link } from "react-router-dom";

function ButtonWithIcon({ to, alt, icon }: { to: string; alt: string; icon: string }) {
  return (
    <Link
      to={to}
      className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
    >
      <img
        src={icon}
        width="30px"
        height="30px"
        alt={alt}
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-700 "
      />
    </Link>
  );
}

export default ButtonWithIcon;
