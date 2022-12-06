import logo from "images/logo.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 md:mb-12 md:py-[12px] xl:mb-4 pos-sticky top-0 z-1 transition-all">
      <a className="inline-flex items-center text-black-800 font-bold gap-2.5 text-xl md:text-2xl" href="#">
        <span className="w-6 h-auto text-primary">
          <div>
            <img src={logo} alt="" width="100%" />
          </div>
        </span>
        <span className="">Name...</span>
      </a>
      <Navbar />
      <a
        className="hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-lime-300 text-gray-500 active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base lg:inline-block lg:px-[16px] lg:py-[8px] lg:font-normal"
        href="#"
      >
        Login
      </a>
      <button
        type="button"
        id="ACjlgb"
        className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-lime-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
      >
        <span className="h-6 w-6">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className=""> Menu </span>
      </button>
    </header>
  );
}

export default Header;