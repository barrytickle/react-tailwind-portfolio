import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./app";

import OptionsProvider from "./context/OptionsProvider";

(async () => {
  try {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <OptionsProvider>
        <App />
      </OptionsProvider>
    );
  } catch (error) {
    console.warn(error);
  }
})();
