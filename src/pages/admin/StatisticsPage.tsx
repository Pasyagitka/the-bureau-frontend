import PieChart from "@/components/charts/pieChart/PieChart";
import AccentButton from "@/elements/buttons/AccentButton";
import { DatePicker } from "rsuite";

const brigadiersRating = [
  { id: 1, full_name: "fefwe", request_count: "11" },
  { id: 1, full_name: "fefwe", request_count: "11" },
  { id: 1, full_name: "fefwe", request_count: "11" },
  { id: 1, full_name: "Нестеров Владислав Александрович", request_count: "11" },
  { id: 1, full_name: "fefwe", request_count: "11" },
];

// const periodsOptions = Object.values(["Месяц"]).map((i) => ({ label: i, value: i }));

function StatisticsPage() {
  const availableBrigadiers = brigadiersRating?.map((item) => (
    <li className="flex flex-row h-full">
      <div className="flex justify-between p-2 gap-5 w-full">
        <div className="text-sm">{item.id}</div>
        <div className="text-sm">{item.full_name}</div>
        <div className="text-gray-600 text-sm">заявок выполнено: {item.request_count}</div>
      </div>
    </li>
  ));

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-80vh container p-12 ">
      <div className="header flex items-end justify-between">
        <p className="text-4xl font-bold text-gray-800 mb-4">Статистика</p>
        <div className="flex gap-5">
          <DatePicker appearance="default" format="yyyy-MM" ranges={[]} oneTap placeholder="Период" editable={false} />
          <AccentButton title="Все время" />
        </div>
      </div>

      <div className="px-4 py-5 sm:px-6 flex">
        <div className="flex basis-1/2 justify-center flex-col">
          <p className="text-2xl font-bold text-gray-800 mb-4">Заявки</p>
          <div className="justify-center">
            <PieChart width={300} height={300} />
          </div>
        </div>
        <div className="flex basis-1/2 justify-center flex-col">
          <p className="text-2xl font-bold text-gray-800 mb-4">Счета</p>

          <div className="justify-center">
            <PieChart width={300} height={300} />
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:px-6 flex">
        <div className="flex basis-1/2 justify-center flex-col">
          <p className="text-2xl font-bold text-gray-800 mb-4">Бригадиры</p>
          <dt className="text-sm font-medium text-gray-500">
            Лидеры среди бригадиров по количеству выполненных заявок
          </dt>
          <div className="container flex flex-col w-3/4 items-center justify-center bg-white rounded-lg shadow p-2 my-2">
            <ul className="flex flex-col divide divide-y w-full">{availableBrigadiers}</ul>
          </div>
        </div>
        <div className="flex basis-1/2 justify-center flex-col">
          <p className="text-2xl font-bold text-gray-800 mb-4">Общее</p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Оборудования смонтировано 150 штук на сумму 29320р</p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Комплектующих продано 29829 штук на сумму 2992р</p>
        </div>
      </div>
    </div>
  );
}

export default StatisticsPage;
