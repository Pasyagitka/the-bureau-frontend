import { Link } from "react-router-dom";

function AccentButton({ to, title }: { to: string; title: string }) {
  return (
    // <button
    //   type="button"
    //   className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
    // >
    //   {title}
    // </button>
    <Link
      to={to}
      className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
    >
      {title}
    </Link>
  );
}

export default AccentButton;
