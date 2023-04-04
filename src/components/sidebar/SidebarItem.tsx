import { useState } from "react";
import { NavLink } from "react-router-dom";

function SidebarItem({ title, icon, to }: { icon: string; title: string; to: string }) {
  const [tabActive, setActive] = useState(false);
  const activeStyle = {
    borderRight: "2px solid #aacd4f",
    backgroundColor: "#f3f4f6",
  };

  return (
    <li style={tabActive ? activeStyle : undefined}>
      <NavLink
        to={to}
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        style={({ isActive }) => (isActive ? setActive(true) : setActive(false))}
      >
        <img
          src={icon}
          width="30px"
          height="30px"
          alt={title}
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        />
        <span className="flex-1 ml-3 font-semibold whitespace-nowrap">{title}</span>
        {/* <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
        </span> */}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
