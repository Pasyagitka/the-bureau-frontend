import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 left-4 flex-0 mx-8" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white shadow-lg rounded">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin/dashboard"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                src="https://img.icons8.com/3d-fluency/512/home.png"
                width="30px"
                height="30px"
                alt=""
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
              {/* <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/requests"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                src="https://img.icons8.com/3d-fluency/512/document.png"
                width="30px"
                height="30px"
                alt=""
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Requests</span>
              {/* <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/storage"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                src="https://img.icons8.com/fluency/512/warehouse-1.png"
                width="30px"
                height="30px"
                alt=""
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Storage</span>
              {/* <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                3
              </span> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/clients"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                src="https://img.icons8.com/3d-fluency/512/person-male.png"
                width="30px"
                height="30px"
                alt=""
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Clients</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/brigadiers"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                src="https://img.icons8.com/3d-fluency/512/3d-fluency-worker-beard-short.png"
                width="30px"
                height="30px"
                alt=""
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Brigadiers</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/admin/#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </NavLink>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
