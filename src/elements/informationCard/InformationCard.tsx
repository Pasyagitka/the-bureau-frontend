function InformationCard() {
  return (
    <div className="shadow-lg rounded-2xl p-4 bg-white w-64 m-auto">
      <div className="w-full h-full text-center">
        <div className="flex h-full flex-col justify-between">
          <svg className="h-12 w-12 mt-4 m-auto text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-gray-600 text-md py-2 px-6">
            User
            <span className="text-gray-800 font-bold">23722873</span>
            has been deleted form database.
          </p>
          <div className="flex items-center justify-between gap-4 w-full mt-8">
            <button
              type="button"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;
