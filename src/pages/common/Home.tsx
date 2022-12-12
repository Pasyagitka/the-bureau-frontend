import Modal from "@/components/modal/Modal";
import { useAppDispatch } from "@/hooks";
import phHome from "images/bg.jpg";

function Home() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative px-4 mx-auto pt-[64px] sm:max-w-xl md:px-8 md:max-w-full lg:py-32 lg:pt-[25px] xl:px-20">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div className="">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Более 3000 реализованных объектов
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Организация заявок на монтаж
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Зарегистрируйтесь и оставьте заявку на монтаж нашего оборудования. Если вы бригадир, можете присоединиться
              к сервису.
            </p>
          </div>
          {/* <div className="flex items-center">
            <a
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary-500 rounded-global"
              href="#"
            >
              {" "}
              Get started{" "}
            </a>
            <a
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              href="#"
            >
              Learn more
            </a>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt="No alt"
          src={phHome}
        />
      </div>

      <Modal />
    </div>
  );
}

export default Home;
