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
<<<<<<< HEAD
<<<<<<< HEAD
      const category = d?.attributes?.category?.data?.attributes;

=======
      // console.log("Category", d.attributes.category);

      const category = d?.attributes?.category?.data?.attributes;

      // console.log("category", category);

>>>>>>> eb3cde9 (Added support for case studies)
=======
      // console.log("Category", d.attributes.category);

      const category = d?.attributes?.category?.data?.attributes;

      // console.log("category", category);

>>>>>>> 57aaad8 (Merge Conflict)
      const page = d.attributes;
      const slug = page.slug === "." ? "/" : page.slug;
      const obj = {
        path: category.slug !== "page" ? `/${category.slug}/${slug}` : slug,
        element: <Template page={page} />,
      };

<<<<<<< HEAD
      pages.push(obj);
=======
      STATE.pages.push(obj);

      console.log("Pages", createBrowserRouter(STATE.pages));
>>>>>>> eb3cde9 (Added support for case studies)
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
