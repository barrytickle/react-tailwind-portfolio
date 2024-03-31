import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getCategoryFromPage } from "./helpers/helpers";
import Template from "./pages/template";
import { endpoint } from "./helpers/config";

console.log("MAIN", endpoint);

const STATE = {
  pages: [],
};

(async () => {
  try {
    const response = await fetch(`${endpoint}/pages/?populate=deep`);
    const data = await response.json();

    data.data.forEach((d) => {
      const page = d.attributes;
      const obj = {
        path: page.slug === "." ? "/" : page.slug,
        element: <Template page={page} />,
      };

      STATE.pages.push(obj);
    });

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
