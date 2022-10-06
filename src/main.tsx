import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { WUPFormElement, WUPTextControl } from "web-ui-pack";
import style from "./styles/main.module.css";

!(WUPFormElement && WUPTextControl) && console.warn("err");

class AppContainer extends Component {
  render() {
    return (
      <StrictMode>
        <wup-form class={style.form}>
          <wup-text name="TextControl" />
          <button type="submit">Submit</button>
        </wup-form>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById("app"));
