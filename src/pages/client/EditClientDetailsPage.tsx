import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, update } from "@/redux/actions/clients";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditClientDetailsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const client = useAppSelector((state) => state.clients.client);
  const user = useAppSelector((state) => state.auth.user);

  const [firstname, setFirstname] = useState();
  const [surname, setSurname] = useState();
  const [patronymic, setPatronymic] = useState();
  const [contactNumber, setContactNumber] = useState();

  useEffect(() => {
    dispatch(get(user.client.id));
  }, [dispatch]);

  useEffect(() => {
    setFirstname(client.firstname);
    setSurname(client.surname);
    setPatronymic(client.patronymic);
    setContactNumber(client.contactNumber);
  }, [client]);

  const handleSubmit = async () => {
    const res = await dispatch(
      update({ id: user.client.id, updateClientDto: { firstname, surname, patronymic, contactNumber } })
    );
    if (!res.error) {
      navigate(-1);
    }
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Редактировать заказчика</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Личная информация</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <h2 className="max-w-sm mx-auto md:w-1/3">Имя</h2>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Имя"
                    defaultValue={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h2 className="max-w-sm mx-auto md:w-1/3">Фамилия</h2>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Фамилия"
                    defaultValue={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h2 className="max-w-sm mx-auto md:w-1/3">Отчество</h2>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Отчество"
                    defaultValue={patronymic}
                    onChange={(e) => setPatronymic(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h2 className="max-w-sm mx-auto md:w-1/3">Контактный телефон</h2>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Контактный номер"
                    defaultValue={contactNumber}
                    value={contactNumber || ""}
                    onChange={(e) => {
                      setContactNumber(e.target.value.replace(/\D/g, ""));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditClientDetailsPage;
