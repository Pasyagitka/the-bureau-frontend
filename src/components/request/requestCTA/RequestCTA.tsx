import { Link } from "react-router-dom";

function RequestCTA() {
  return (
    <div>
      <div className="text-center w-full mx-auto py-8 px-4 sm:px-6 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">Оставьте вашу</span>
          <span className="block text-lime-500">заявку на монтаж</span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <Link
              to="/client/leave-request"
              type="button"
              className="py-4 px-6  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCTA;
