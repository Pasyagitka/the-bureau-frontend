import "./styles/main.scss";
import "./main.css";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import App from "./components/router/App";

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       await persistor.purge();
//       console.log(error, "axios 401");
//       deleteToken();
//       // (window as Window).location = "/login";
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

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
