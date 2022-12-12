/* eslint-disable jsx-a11y/label-has-associated-control */
import DatepickerRange from "@/elements/datepickerRange/DatepickerRange";
import { create } from "@/redux/actions/requests";
import { useEffect, useState } from "react";
import { CreateRequestDto } from "@/types/dto/createRequestDto";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/storage/equipment";
import { useNavigate } from "react-router-dom";
import TextInput from "./TextInput";

function LeaveRequestForm() {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [house, setHouse] = useState();
  const [corpus, setCorpus] = useState();
  const [flat, setFlat] = useState();
  const [stage, setStage] = useState(1);

  const navigate = useNavigate();

  const client = {
    id: 5,
  };

  const [comment, setComment] = useState();
  const [requestEquipmentList] = useState(new Map());

  const [dates, setValue] = useState({
    startDate: new Date(),
    // endDate: new Date(),
    // endDate: new Date().setMonth(11),
  });

  function loadAll() {
    dispatch(getAll());
  }
  useEffect(loadAll, [dispatch]);

  const equipmentList = useAppSelector((state) => state.equipment.equipment);
  const listItems = equipmentList.map((item) => (
    <TextInput
      key={item.id}
      placeholder={item.type}
      defaultValue={0}
      onChange={(e) => {
        if (!Number(e.target.value)) return;
        requestEquipmentList.set(item.id, e.target.value);
        if (e.target.value === "") requestEquipmentList.delete(item.id);
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
        country: "Belarus",
        city,
        street,
        house: +house,
        corpus: corpus || null,
        flat: +flat || null,
      },
      client: {
        client,
      },
      requestEquipment,
    };

    const res = await dispatch(create(request));
    if (!res.error) {
      navigate(-1);
    }
  };

  const handleSelectChange = (e: number) => {
    // console.log(Number(e.currentTarget.value));
    setStage(Number(e));
    console.log(stage);
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Leave your request</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Address</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div className="col-span-6 sm:col-span-3">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-gray-700 placeholder-gray-400"
                >
                  <option>Belarus</option>
                </select>
              </div>
              <TextInput
                placeholder="City"
                value=""
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <TextInput
                placeholder="Street"
                value=""
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
              <TextInput
                placeholder="House"
                value=""
                onChange={(e) => {
                  if (!Number(e.target.value)) return;
                  setHouse(e.target.value);
                }}
              />
              <TextInput
                placeholder="Corpus"
                value=""
                onChange={(e) => {
                  setCorpus(e.target.value);
                }}
              />
              <TextInput
                placeholder="Flat"
                value=""
                onChange={(e) => {
                  if (!Number(e.target.value)) return;
                  setFlat(e.target.value);
                }}
              />
            </div>
          </div>
          <hr />
          <div className="px-10n">
            <DatepickerRange value={dates} handleValueChange={handleDateChange} />
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Stage</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div className="col-span-6 sm:col-span-3">
                <select
                  name="stage"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-gray-700 placeholder-gray-400"
                  value={stage}
                  onChange={(e) => handleSelectChange(Number(e.currentTarget.value))}
                >
                  <option value={1}>Clean</option>
                  <option value={2}>Rough</option>
                  <option value={3}>Both</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-4/12">Leave comment</h2>
            <label className="text-gray-700" htmlFor="name">
              <textarea
                className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
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
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Request equipment</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">{listItems}</div>
          </div>
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            {/* <button
              type="submit"
              className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Save
            </button> */}
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeaveRequestForm;
