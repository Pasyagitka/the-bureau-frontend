import { useState } from "react";
import { NavLink } from "react-router-dom";

function TabItem({ title, link }: { title: string; link: string }) {
  const [tabActive, setActive] = useState(false);

  const activeStyle = {
    borderBottom: "2px solid #aacd4f",
  };

  return (
    <li className="mr-2" style={tabActive ? activeStyle : undefined}>
      <NavLink
        to={link}
        className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 group"
        style={({ isActive }) => (isActive ? setActive(true) : setActive(false))}
      >
        <svg
          aria-hidden="true"
          className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        {title}
      </NavLink>
    </li>
  );
}

export default TabItem;