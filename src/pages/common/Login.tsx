/* eslint-disable jsx-a11y/label-has-associated-control */
import { useAppDispatch, useAppSelector } from "@/hooks";
import useDidMountEffect from "@/hooks/useDidMountEffect";
import { getInfo, loginUser } from "@/redux/actions/auth";
import bg from "images/bg.jpg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  const { loggedIn, role } = authState;
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const user = useAppSelector((state) => state.auth.user);

  useDidMountEffect(() => {
    dispatch(getInfo());
  }, [loggedIn]);

  useEffect(() => {
    if (user && user.role === "Admin") {
      navigate("/admin");
      return;
    }
    if (user && user.role === "Brigadier") {
      navigate("/brigadier");
      return;
    }
    if (user) {
      navigate("/client");
    }
  }, [user]);

  const handleSubmit = () => {
    if (!username || !password) {
      toast.error("Укажите логин и пароль.");
    } else dispatch(loginUser({ username, password }));
  };

  return (
    <main>
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full md:h-full bg-gray-700"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">Войдите в свой аккаунт</h6>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                  <form>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Имя пользователя</label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Имя пользователя"
                        style={{ transition: "all .15s ease" }}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
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
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        Вход
                      </button>
                      <div className="flex flex-row text-sm w-full mt-4">
                        <div className="text-left w-1/3">
                          <Link to="/forgot-password" className="text-gray-700 underline ">
                            Забыли пароль?
                          </Link>
                        </div>
                        <div className="text-right w-2/3">
                          <Link to="/register" className="text-gray-700 underline ">
                            Зарегистрироваться{" "}
                          </Link>
                          или{" "}
                          <Link to="/register/brigadier" className="text-gray-700 underline ">
                            {" "}
                            присоединиться к сервису
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
