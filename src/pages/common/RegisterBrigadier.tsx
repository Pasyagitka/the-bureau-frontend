/* eslint-disable jsx-a11y/label-has-associated-control */
import Avatar from "@/elements/avatar/Avatar";
import { signupBrigadier } from "@/redux/actions/auth";
import { CreateBrigadierDto } from "@/types/dto/brigadier/createBrigadierDto";
import { Role } from "@/types/enum/role.enum";
import bg from "images/bg.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import RegisterTextInput from "../../elements/inputs/RegisterTextInput";

function RegisterBrigadier() {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [fileInfo, setFileInfo] = useState(null);

  const handleSubmit = () => {
    const brigadierUser: CreateBrigadierDto = {
      firstname,
      surname,
      patronymic,
      contactNumber,
      email,
      password,
      login,
      role: Role.Brigadier,
    };
    dispatch(signupBrigadier(brigadierUser));
  };

  return (
    // <main className="h-screen">
    <section className="absolute w-full h-full">
      <div
        className="absolute top-0 w-full h-max md:h-screen bg-gray-900"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 h-max">
          <div className="flex content-center items-center justify-center my-12">
            <div className="w-full lg:w-5/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">Присоединиться к сервису</h6>
                  </div>
                  <hr className="mt-3 border-b-1 border-gray-400" />
                </div>
                <div className="w-full flex flex-col md:flex-row">
                  <div className="flex-auto px-4 lg:px-10 py-2 pt-0 w-full md:w-2/3">
                    <div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                          Пароль
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Пароль"
                          style={{ transition: "all .15s ease" }}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <RegisterTextInput
                        label="Имя пользователя"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                      />
                      <RegisterTextInput label="Фамилия" value={surname} onChange={(e) => setSurname(e.target.value)} />
                      <RegisterTextInput label="Имя" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                      <RegisterTextInput
                        label="Отчество"
                        value={patronymic}
                        onChange={(e) => setPatronymic(e.target.value)}
                      />
                      <RegisterTextInput
                        label="Контактный номер"
                        value={contactNumber}
                        onChange={(e) => {
                          setContactNumber(e.target.value.replace(/\D/g, ""));
                        }}
                      />
                    </div>
                  </div>
                  <div className="m-4 px-6 mx-auto">
                    <Avatar fileInfo={fileInfo} setFileInfo={setFileInfo} />
                  </div>
                </div>
                <div className="px-6">
                  <div className="text-center">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Стать партнером
                    </button>
                  </div>
                  <div className="text-center mb-2">
                    <Link to="/login" className="text-gray-900">
                      <small>Уже есть аккаунт? Войдите</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </main>
  );
}

export default RegisterBrigadier;
