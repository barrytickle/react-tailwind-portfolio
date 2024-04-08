import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./pages/template";
import { endpoint } from "./helpers/config";

console.log("MAIN", endpoint);

const STATE = {
  pages: [],
};

(async () => {
  try {
    const response = await fetch(`${endpoint}/pages/`);
    const data = await response.json();

    data.forEach((page) => {
      const obj = {
        path: page.slug === "homepage" ? "/" : page.slug,
        element: <Template page={page.blocks} />,
      };

      STATE.pages.push(obj);
    });

    console.log(STATE);

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <Navigation />
        <RouterProvider router={createBrowserRouter(STATE.pages)} />
      </React.StrictMode>
    );
  } catch (error) {
    console.warn(error);
  }
})();
