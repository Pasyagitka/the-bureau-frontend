function TimeLineElement({
  text,
  date,
  isActive,
  isAnimated,
  isLast,
}: {
  text: string;
  date?: string;
  isActive?: boolean;
  isAnimated?: boolean;
  isLast?: boolean;
}) {
  return (
    <li className="relative flex flex-row md:block mb-6 sm:mb-0 w-full md:w-1/4">
      <div className="flex md:items-center sm:flex-row ">
        <div
          className={`flex z-10 justify-center items-center -translate-x-3 md:transfrom-none w-6 h-6 rounded-full ring-0 ring-white sm:ring-8 shrink-0 ${
            isActive ? "bg-lime-300" : "bg-gray-300"
          } ${isAnimated ? "animate-bounce" : ""}`}
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
          className="hidden sm:flex w-full bg-gray-200 h-0.5 sm:visible invisible"
          style={{
            display: isLast ? "none" : "initial",
          }}
        />
      </div>
      <div className="md:mt-3 sm:pr-8">
        <p className="md:text-base text-sm font-semibold text-gray-900">{text}</p>
        {date && <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{date}</time>}
      </div>
    </li>
  );
}

TimeLineElement.defaultProps = {
  isActive: false,
  isAimated: false,
  isLast: false,
  date: null,
};

export default TimeLineElement;
