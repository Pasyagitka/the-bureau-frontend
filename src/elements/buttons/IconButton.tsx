/* eslint-disable react/require-default-props */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/require-default-props
function IconButton({
  icon,
  to = "",
  alt,
  isLink,
  onClick,
}: {
  icon: string;
  to?: string;
  alt: string;
  isLink: boolean;
  onClick?: () => void;
}) {
  return isLink ? (
    <Link to={to} className="text-lime-600 hover:text-lime-700">
      <img
        src={icon}
        width="30px"
        height="30px"
        alt={alt}
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-700 "
      />
    </Link>
  ) : (
    <button type="button" className="text-red-600 hover:text-red-700" onClick={onClick}>
      <img
        src={icon}
        width="30px"
        height="30px"
        alt={alt}
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-700 "
      />
    </button>
  );
}

export default IconButton;
