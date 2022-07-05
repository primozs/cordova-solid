/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

if (window.cordova) {
  document.addEventListener(
    "deviceready",
    () => {
      render(() => <App />, document.getElementById("root") as HTMLElement);
    },
    false
  );
} else {
  render(() => <App />, document.getElementById("root") as HTMLElement);
}
