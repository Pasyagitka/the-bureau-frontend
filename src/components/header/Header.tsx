import logo from "images/logo.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex h-10vh backdrop-blur-md bg-white/50 justify-between items-center py-4 px-2 md:mb-12 md:py-[12px] xl:mb-4 pos-sticky top-0 z-1 transition-all">
      <a className="inline-flex items-center text-black-800 font-bold gap-2.5 text-xl md:text-2xl" href="#">
        <span className="w-12 h-auto text-primary">
          <div>
            <img src={logo} alt="" width="100%" />
          </div>
        </span>
        <span className="max-w-lg font-sans text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl sm:leading-none hidden md:block">
          Mounting Bureau
        </span>
      </a>
      <Navbar />
    </header>
  );
}

export default Header;
