import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Template from "./pages/template";
import { endpoint } from "./helpers/config";

import App from "./app";

console.log("MAIN", endpoint);

(async () => {
  try {
    const response = await fetch(`${endpoint}/pages/?populate=deep`);
    const data = await response.json();

    const pages = [];

    data.data.forEach((d) => {
      const category = d?.attributes?.category?.data?.attributes;

      const page = d.attributes;
      const slug = page.slug === "." ? "/" : page.slug;
      const obj = {
        path: category.slug !== "page" ? `/${category.slug}/${slug}` : slug,
        element: <Template page={page} />,
      };

      pages.push(obj);
    });

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <App pages={pages} />
      </React.StrictMode>
    );
  } catch (error) {
    console.warn(error);
  }
})();
