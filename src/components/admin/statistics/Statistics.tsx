import PieChart from "@/components/charts/pieChart/PieChart";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  getBrigadiersCount,
  getClientsCount,
  getRequestsStat,
  getInvoicesStat,
  getBrigadiersTop,
  getInstalledEquipment,
  getSoldAccessories,
} from "@/redux/actions/statistics";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { DatePicker } from "rsuite";

function Statistics() {
  const dispatch = useAppDispatch();

  const statistics = useAppSelector((state) => state.statistics);

  const [dates, setDateValue] = useState(null);

  const loadAll = (dates) => {
    dispatch(getBrigadiersCount(dates));
    dispatch(getClientsCount(dates));
    dispatch(getRequestsStat(dates));
    dispatch(getInvoicesStat(dates));
    dispatch(getBrigadiersTop(dates));
    dispatch(getInstalledEquipment(dates));
    dispatch(getSoldAccessories(dates));
  };

  useEffect(() => {
    loadAll(null);
  }, [dispatch]);

  useEffect(() => {
    loadAll(dates);
  }, [dates]);

  const handleDateChange = (newPeriodValue) => {
    setDateValue(newPeriodValue);
  };

  const { requestsStat, invoicesStat } = statistics;
  const brigadiersRating = statistics.brigadiersTop?.map((item) => (
    <li className="flex flex-row h-full">
      <div className="flex justify-between p-2 gap-5 w-full">
        <div className="text-sm">{item.id}</div>
        <div className="text-sm">{item.full_name}</div>
        <div className="text-gray-600 text-sm">заявок выполнено: {item.request_count}</div>
      </div>
    </li>
  ));

  return (
    <div>
      <div className="header flex items-end justify-between">
        <p className="text-4xl font-bold text-gray-800 mb-4">Статистика</p>
        <div className="flex gap-5">
          <DatePicker
            appearance="default"
            format="yyyy-MM"
            placement="bottomRight"
            shouldDisableDate={(date) => dayjs(date).isAfter(new Date())}
            ranges={[]}
            oneTap
            placeholder="Период"
            editable={false}
            value={dates}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div className="py-5 flex w-full">
        <div className="flex justify-center flex-row gap-10">
          <div>
            <p className="text-2xl font-bold text-gray-800 mb-4 text-center">Заявки</p>
            {statistics.requestsStat && (
              <PieChart
                width={250}
                height={250}
                total={requestsStat[0].count}
                chartData={[
                  {
                    label: requestsStat[1].label,
                    count: requestsStat[1].count,
                    color: "rgba(132, 204, 22, 0.8)",
                    centerTitle: requestsStat[1].count,
                  },
                  {
                    label: requestsStat[2].label,
                    count: requestsStat[2].count,
                    color: "rgba(249, 115, 22, 0.8)",
                    centerTitle: requestsStat[2].count,
                  },
                  {
                    label: requestsStat[3].label,
                    count: requestsStat[3].count,
                    color: "rgba(234, 179, 8, 0.8)",
                    centerTitle: requestsStat[3].count,
                  },
                  {
                    label: requestsStat[4].label,
                    count: requestsStat[4].count,
                    color: "rgba(59, 130, 246, 0.8)",
                    centerTitle: requestsStat[4].count,
                  },
                ]}
              />
            )}
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800 mb-4 text-center">Счета</p>
            {statistics.invoicesStat && (
              <PieChart
                width={250}
                height={250}
                total={invoicesStat[0].count}
                chartData={[
                  {
                    label: invoicesStat[1].label,
                    count: invoicesStat[1].count,
                    color: "rgba(132, 204, 22, 0.8)",
                    centerTitle: invoicesStat[1].count,
                  },
                  {
                    label: invoicesStat[2].label,
                    count: invoicesStat[2].count,
                    color: "rgba(249, 115, 22, 0.8)",
                    centerTitle: invoicesStat[2].count,
                  },
                  {
                    label: invoicesStat[3].label,
                    count: invoicesStat[3].count,
                    color: "rgba(234, 179, 8, 0.8)",
                    centerTitle: invoicesStat[3].count,
                  },
                  {
                    label: invoicesStat[4].label,
                    count: invoicesStat[4].count,
                    color: "rgba(59, 130, 246, 0.8)",
                    centerTitle: invoicesStat[4].count,
                  },
                  {
                    label: invoicesStat[5].label,
                    count: invoicesStat[5].count,
                    color: "rgba(93,30,91,0.6)",
                    centerTitle: invoicesStat[5].count,
                  },
                ]}
              />
            )}
          </div>
        </div>
        <div className="sm:px-6 flex">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-gray-800 mb-4 text-center">Бригадиры</p>
            <dt className="text-sm font-medium text-gray-500">
              Лидеры среди бригадиров по количеству выполненных заявок
            </dt>
            <div className="container flex flex-col items-center justify-center bg-white rounded-lg shadow">
              <ul className="flex flex-col divide divide-y w-full">{brigadiersRating}</ul>
            </div>
          </div>
        </div>
        <div className="sm:px-6 flex">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-gray-800 mb-4 text-center">Общее</p>
            <dt className="text-sm font-medium text-gray-500">
              Оборудования смонтировано {statistics.installedEquipment?.count} штук(и)
            </dt>
            <dt className="text-sm font-medium text-gray-500">
              Комплектующих продано {statistics.soldAccessories && statistics.soldAccessories[0]?.count} штук(и) на
              сумму {statistics.soldAccessories && statistics.soldAccessories[1]?.count}
            </dt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
