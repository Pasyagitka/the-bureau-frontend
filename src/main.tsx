import "./styles/main.scss";
import "./main.css";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/router/App";

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(<AppContainer />);
