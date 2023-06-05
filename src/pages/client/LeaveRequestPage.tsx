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
import { IconButton, InputNumber, Popover, Popover, Whisper } from "rsuite";
import InfoOutlineIcon from "@rsuite/icons/InfoOutline";
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
    <>
      <label className="ml-4 text-sm">{item.type}, ед.</label>
      <InputNumber
        key={item.id}
        placeholder={item.type}
        defaultValue={0}
        max={5}
        min={0}
        onChange={(value) => {
          if (Number(value) === 0) requestEquipmentList.delete(item.id);
          requestEquipmentList.set(item.id, value);
          console.log(requestEquipmentList);
        }}
        style={{ marginBottom: 12, marginTop: 0, marginLeft: 12, width: "98%" }}
      />
    </>
  ));

  const handleDateChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleSubmit = async () => {
    const requestEquipment = Array.from(requestEquipmentList, (item) => ({ equipment: item[0], quantity: +item[1] }));
    console.log(requestEquipment);
    const request: CreateRequestDto = {
      mountingDate: dates,
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

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-500 font-semibold">Оставьте свою заявку</h1>
            </div>
          </div>
        </div>
        <div className="space-y-2 bg-white">
          <hr />
          <div className="items-center w-full md:p-4 px-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 text-gray-500 font-semibold">Адрес*</h2>
            <div className="max-w-sm mx-auto space-y-2 md:w-2/3">
              <label className="block mb-2 text-sm">Введите адрес, включая номер дома</label>
              <AddressSuggestions
                token={process.env.GEOCODER_API_KEY}
                value={addressSuggest}
                filterLocations={[
                  {
                    country: "Беларусь",
                    city: "Минск",
                  },
                ]}
                hintText="Введите свой адрес, включая номер дома"
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
              <LeaveRequestTextInput placeholder="Город*" value={city} disabled />
              <LeaveRequestTextInput placeholder="Улица*" value={street} disabled />
              <LeaveRequestTextInput placeholder="Дом*" value={house || ""} disabled />
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
            <h2 className="max-w-sm mx-auto md:w-1/3 text-gray-500 font-semibold">Дата монтажа*</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <CustomDatepicker value={dates} handleValueChange={handleDateChange} />
            </div>
          </div>
          {/* <div className="px-10n mx-auto flex justify-center">
            <h2 className="max-w-sm mx-auto md:w-1/3">Дата монтажа</h2>
            
          </div> */}
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 text-gray-500 font-semibold">Стадия отделки*</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div className="col-span-6 sm:col-span-3">
                <Select data={stagesList} value={stage} defaultValue={stage} onChange={setStage} searchable={false} />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-2 md:p-4 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-2 md:w-4/12 text-gray-500 font-semibold text-left">Комментарий к заявке</h2>
            <label className="text-gray-700 text-right mx-auto" htmlFor="comment">
              <textarea
                className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                id="comment"
                placeholder="Введите комментарий"
                name="comment"
                rows="2"
                cols="32"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </label>
          </div>
          <hr />
          <div className="items-center w-full p-2 md:px-4 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
            <div className="flex md:flex-col md:w-1/3 justify-start">
              <span className="max-w-sm mx-auto px-2 text-gray-500 font-semibold">Монтируемое оборудование</span>

              <Whisper
                speaker={
                  <Popover>
                    Укажите количество монтируемого оборудования (минимум одна позиция), <br />
                    например: конвектор внутрипольный - 2 ед.
                  </Popover>
                }
              >
                <div className="animate-pulse w-min">
                  <IconButton icon={<InfoOutlineIcon />} circle size="sm" />
                </div>
              </Whisper>
            </div>
            <div className="max-w-sm mx-auto space-y-2 md:w-2/3 px-4 md:px-0">{listItems}</div>
          </div>
          <div className="w-full flex px-4 pb-4 mx-auto text-gray-500 justify-center">
            <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeaveRequestPage;
