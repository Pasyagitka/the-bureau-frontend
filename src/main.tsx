import "./styles/main.scss";
import "./main.css";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";
import store, { persistor } from "./redux/store";
import App from "./components/router/App";
import { deleteToken } from "./redux/actions/auth";

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      await persistor.purge();
      deleteToken();
      (window as Window).location = "/login";
    } else if (error.response.status === 504) {
      (window as Window).location = "/gatewayTimeout";
    } else {
      return Promise.reject(error);
    }
  }
);

function AppContainer() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(<AppContainer />);
