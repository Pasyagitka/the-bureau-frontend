import { authLinks } from "@/constants";
import axios from "axios";
import { Dispatch } from "redux";
import jwtDecode from "jwt-decode";
import { Role } from "@/types/enum/role.enum";
import { CreateClientDto } from "@/types/dto/client/createClientDto";
import { CreateBrigadierDto } from "@/types/dto/brigadier/createBrigadierDto";
import { AUTHENTICATED, GET_USER, NOT_AUTHENTICATED } from "../actionTypes/auth";

const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

export const getToken = () => {
  const now = new Date(Date.now()).getTime();
  const timeAllowed = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
  if (timeSinceLastLogin < timeAllowed) {
    return localStorage.getItem("token");
  }
};

export const deleteToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
};

export function signupClient(registerClientDto: CreateClientDto) {
  return async (dispatch: Dispatch) => {
    await axios
      .post(authLinks.registerClient, registerClientDto)
      .then((response) => {
        alert("Account created");
        const token = response.data.access_token;
        setToken(token);
        const tokenPayload: { role: Role.Client; sub: number } = jwtDecode(token);
        dispatch({ type: AUTHENTICATED, payload: { role: tokenPayload.role, id: tokenPayload.sub } });
      })
      .catch((error) => {
        alert(error.response.data.message);
        dispatch({ type: NOT_AUTHENTICATED });
      });
  };
}

export function signupBrigadier(registerBrigadierDto: CreateBrigadierDto) {
  return async (dispatch: Dispatch) => {
    await axios
      .post(authLinks.registerBrigadier, registerBrigadierDto)
      .then((response) => {
        alert("Brigadier`s account created");
        const token = response.data.access_token;
        setToken(token);
        const tokenPayload: { role: Role.Brigadier; sub: number } = jwtDecode(token);
        dispatch({ type: AUTHENTICATED, payload: { role: tokenPayload.role, id: tokenPayload.sub } });
      })
      .catch((error) => {
        alert(error.response.data.message);
        dispatch({ type: NOT_AUTHENTICATED });
      });
  };
}

export function loginUser({ username, password }: { username: string; password: string }) {
  return async (dispatch: Dispatch) => {
    await axios
      .post(authLinks.login, {
        username,
        password,
      })
      .then((response) => {
        const token = response.data.access_token;
        setToken(token);
        const tokenPayload: { role: Role.Admin | Role.Client | Role.Brigadier; sub: number } = jwtDecode(token);
        dispatch({ type: AUTHENTICATED, payload: { role: tokenPayload.role, id: tokenPayload.sub } });
      })
      .catch((error) => {
        alert(error.response.data.message);
        dispatch({ type: NOT_AUTHENTICATED });
      });
  };
}

export function getInfo() {
  return async (dispatch: Dispatch) => {
    await axios
      .get("/api/auth/userinfo", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        const user = response.data;
        dispatch({ type: GET_USER, payload: { user } });
      });
  };
}
