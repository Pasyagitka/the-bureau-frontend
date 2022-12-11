import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, update } from "@/redux/actions/brigadiers";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBrigadierDetails() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const brigadier = useAppSelector((state) => state.brigadiers.brigadier);

  const [firstname, setFirstname] = useState();
  const [surname, setSurname] = useState();
  const [patronymic, setPatronymic] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    dispatch(get(params.id));
  }, [dispatch]);

  useEffect(() => {
    setFirstname(brigadier.firstname);
    setSurname(brigadier.surname);
    setPatronymic(brigadier.patronymic);
    setContactNumber(brigadier.contactNumber);
  }, [brigadier]);

  const handleSubmit = async () => {
    const res = await dispatch(
      update({ id: params.id, updateBrigadierDto: { firstname, surname, patronymic, contactNumber } })
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
              <h1 className="text-gray-600">Update brigadier</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <h2 className="max-w-sm mx-auto md:w-1/3">Firstname</h2>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="firstname"
                    defaultValue={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h2 className="max-w-sm mx-auto md:w-1/3">Surname</h2>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="surname"
                    defaultValue={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h2 className="max-w-sm mx-auto md:w-1/3">Patronymic</h2>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="patronymic"
                    defaultValue={patronymic}
                    onChange={(e) => setPatronymic(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h2 className="max-w-sm mx-auto md:w-1/3">Contact number</h2>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="contactNumber"
                    defaultValue={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
              </div>
              {/* <Select
                title="Stage"
                values={[
                  { id: 1, name: "Clean" },
                  { id: 2, name: "Rough" },
                  { id: 3, name: "Both" },
                ]}
              /> */}
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
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

export default EditBrigadierDetails;