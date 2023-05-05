/* eslint-disable jsx-a11y/label-has-associated-control */
import CustomDatepicker from "@/elements/customDatepicker/CustomDatepicker";
import { create } from "@/redux/actions/requests";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/storage/equipment";
import { useNavigate } from "react-router-dom";
import SubmitButton from "@/elements/buttons/SubmitButton";
import { AddressSuggestions } from "react-dadata";
import { CreateRequestDto } from "@/types/dto/request/createRequestDto";
import Select from "@/elements/select/Select";
import { getAll as getAllStages } from "@/redux/actions/stage";
import LeaveRequestTextInput from "../../elements/inputs/LeaveRequestTextInput";

function LeaveRequestPage() {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [house, setHouse] = useState();
  const [flat, setFlat] = useState();
  const [stage, setStage] = useState(1);
  const [addressSuggest, setAddressSuggest] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const navigate = useNavigate();

  const client = {
    id: 5,
  };

  const [comment, setComment] = useState();
  const [requestEquipmentList] = useState(new Map());

  // const [dates, setValue] = useState({
  //   startDate: new Date(),
  //   // endDate: new Date(),
  //   // endDate: new Date().setMonth(11),
  // });

  const { stages } = useAppSelector((state) => state.stages);
  const stagesList = stages.map((i) => ({
    value: i.id,
    label: i.stage,
  }));

  const [dates, setValue] = useState(null);

  function loadAll() {
    dispatch(getAll());
    dispatch(getAllStages());
  }
  useEffect(loadAll, [dispatch]);

  const equipmentList = useAppSelector((state) => state.equipment.equipment);
  const listItems = equipmentList.map((item) => (
    <LeaveRequestTextInput
      key={item.id}
      placeholder={item.type}
      defaultValue={0}
      onChange={(e) => {
        if (e.target.value === "") requestEquipmentList.delete(item.id);
        if (!Number(e.target.value)) return;
        requestEquipmentList.set(item.id, e.target.value); // TODO else
        console.log(requestEquipmentList);
      }}
    />
  ));

  const handleDateChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleSubmit = async () => {
    const requestEquipment = Array.from(requestEquipmentList, (item) => ({ equipment: item[0], quantity: +item[1] }));
    console.log(requestEquipment);
    const request: CreateRequestDto = {
      mountingDate: dates.startDate,
      // clientDateStart: dates.startDate,
      // clientDateEnd: dates.endDate,
      comment: comment || null,
      stage,
      address: {
        city,
        street,
        house,
        corpus: null,
        flat: Number(flat) || null,
        lat,
        lon,
      },
      client: {
        client,
      },
      requestEquipment,
    };

    const createResponse = await dispatch(create(request));
    if (!createResponse.error) {
      navigate(-1);
    }
  };

  const join = (arr) => {
    const separator = arguments.length > 1 ? arguments[1] : ", ";
    return arr.filter((n) => n).join(separator);
  };

  function geoQuality(qc_geo) {
    const localization = {
      "0": "точные",
      "1": "ближайший дом",
      "2": "улица",
      "3": "населенный пункт",
      "4": "город",
    };
    return localization[qc_geo] || qc_geo;
  }

  function geoLink(address) {
    return join(
      [
        '<a target="_blank" href="',
        "https://maps.yandex.ru/?text=",
        address.geo_lat,
        ",",
        address.geo_lon,
        '">',
        address.geo_lat,
        ", ",
        address.geo_lon,
        "</a>",
      ],
      ""
    );
  }

  const handleSelectChange = (e: number) => {
    // console.log(Number(e.currentTarget.value));
    setStage(Number(e));
    console.log(stage);
  };

  // console.log("address", addressSuggest);

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Оставьте свою заявку</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <hr />
          <div className="items-center w-full md:p-4 px-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Адрес</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <AddressSuggestions
                token={process.env.GEOCODER_API_KEY}
                value={addressSuggest}
                filterLocations={[
                  {
                    country: "Беларусь",
                    city: "Минск",
                  },
                ]}
                onChange={(e) => {
                  console.log(e.data);
                  setAddressSuggest(e.data);
                  setCity(e?.data.city);
                  setStreet(e?.data.street);
                  setHouse(e?.data.house);
                  setLat(e?.data.geo_lat);
                  setLon(e?.data.geo_lon);
                }}
              />
              <LeaveRequestTextInput placeholder="Город" value={city} disabled />
              <LeaveRequestTextInput placeholder="Улица" value={street} disabled />
              <LeaveRequestTextInput placeholder="Дом" value={house || ""} disabled />
              <LeaveRequestTextInput
                placeholder="Квартира"
                value={flat || ""}
                onChange={(e) => {
                  setFlat(e.target.value.replace(/\D/g, ""));
                }}
              />
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Дата монтажа</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <CustomDatepicker value={dates} handleValueChange={handleDateChange} />
            </div>
          </div>
          {/* <div className="px-10n mx-auto flex justify-center">
            <h2 className="max-w-sm mx-auto md:w-1/3">Дата монтажа</h2>
            
          </div> */}
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Стадия отделки</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div className="col-span-6 sm:col-span-3">
                <Select
                  data={stagesList}
                  value={stage}
                  defaultValue={stage}
                  onChange={setStage}
                  searchable={false}
                  label="стадия отделки"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-2 md:p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-4/12">Комментарий к заявке</h2>
            <label className="text-gray-700" htmlFor="name">
              <textarea
                className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                id="comment"
                placeholder="Введите комментарий"
                name="comment"
                rows="5"
                cols="40"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </label>
          </div>
          <hr />
          <div className="items-center w-full p-2 md:p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Монтируемое оборудование</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">{listItems}</div>
          </div>
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            {/* <button
              type="submit"
              className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Save
            </button> */}
            <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeaveRequestPage;
