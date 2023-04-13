import phHome from "images/bg.jpg";

function Home() {
  return (
    <section className="relative py-24 px-4 h-80vh">
      <div className="z-20 relative text-white container mx-12 w-1/3">
        <h1 className="mb-4 text-5xl font-bold">Организация заявок на монтаж</h1>
        <p className="leading-normal text-2xl">Более 3000 реализованных объектов</p>
        <p className="leading-normal text-2xl">
          Зарегистрируйтесь и оставьте заявку на монтаж нашего оборудования. Если вы бригадир, можете присоединиться к
          сервису.
        </p>
        {/* <a href="#" className="inline-block bg-blue-500 text-white no-underline hover:bg-blue-800 mt-4 p-4 rounded">
          A Call to Action
        </a> */}
      </div>
      <div className="absolute inset-0 h-auto z-10">
        <img className="h-full w-full object-cover brightness-75" alt="" src={phHome} />
      </div>
    </section>
  );
}

export default Home;
