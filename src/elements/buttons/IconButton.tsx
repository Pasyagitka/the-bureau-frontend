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
    <Link to={to} className="text-lime-600 hover:text-lime-900">
      <img
        src={icon}
        width="30px"
        height="30px"
        alt={alt}
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
      />
    </Link>
  ) : (
    <button type="button" className="text-red-600 hover:text-red-900" onClick={onClick}>
      <img
        src={icon}
        width="30px"
        height="30px"
        alt={alt}
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
      />
    </button>
  );
}

export default IconButton;
