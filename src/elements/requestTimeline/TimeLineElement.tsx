function TimeLineElement({ text, date, isActive }: { text: string; date: string; isActive?: boolean }) {
  return (
    <li className="relative mb-6 sm:mb-0">
      <div className="flex items-center">
        <div
          className={`flex z-10 justify-center items-center w-6 h-6 rounded-full ring-0 ring-white sm:ring-8 shrink-0 ${
            isActive ? "bg-gray-300" : "bg-lime-300"
          }`}
        >
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-lime-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          />
        </div>
        <div
          className="hidden sm:flex w-full bg-gray-200 h-0.5"
          style={{
            display: isActive ? "none" : "initial",
          }}
        />
      </div>
      <div className="mt-3 sm:pr-8">
        <h3 className="text-base font-semibold text-gray-900">{text}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{date}</time>
      </div>
    </li>
  );
}

TimeLineElement.defaultProps = {
  isActive: false,
};

export default TimeLineElement;
