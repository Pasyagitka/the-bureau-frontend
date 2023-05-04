import { useState } from "react";
import { NavLink } from "react-router-dom";

function TabItem({ title, link, image }: { title: string; link: string; image: string }) {
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
        <img src={image} width="30px" height="30px" className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
        {title}
      </NavLink>
    </li>
  );
}

export default TabItem;
