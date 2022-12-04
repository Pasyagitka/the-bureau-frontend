import { authLinks } from "@/constants";
import axios from "axios";
import { Dispatch } from "redux";
import { AUTHENTICATED, NOT_AUTHENTICATED } from "../actionTypes/auth";

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

const deleteToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
};

export const signupUser = (credentials) => (dispatch) =>
  fetch(authLinks.registerClient, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: credentials }),
  }).then((res) => {
    if (res.ok) {
      setToken(res.headers.get("Authorization"));
      return res.json().then((userJson) => dispatch({ type: AUTHENTICATED, payload: userJson }));
    }
    return res.json().then((errors) => {
      dispatch({ type: NOT_AUTHENTICATED });
      return Promise.reject(errors);
    });
  });

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
        dispatch({ type: AUTHENTICATED, payload: token });
      })
      .catch((error) => {
        alert(error.response.data.message);
        dispatch({ type: NOT_AUTHENTICATED });
      });
  };
}

export const logoutUser = () => (dispatch) =>
  fetch("http://localhost:5000/api/auth/logout", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  }).then((res) => {
    deleteToken();
    if (res.ok) {
      return res.json().then(() => dispatch({ type: NOT_AUTHENTICATED }));
    }
    return res.json().then((errors) => {
      dispatch({ type: NOT_AUTHENTICATED });
      return Promise.reject(errors);
    });
  });

export const checkAuth = () => (dispatch) =>
  fetch("http://localhost:5000/api/auth/current_user", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json().then((user) => {
        user.data ? dispatch({ type: AUTHENTICATED, payload: user }) : dispatch({ type: NOT_AUTHENTICATED });
      });
    }
    return Promise.reject(dispatch({ type: NOT_AUTHENTICATED }));
  });
