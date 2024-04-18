import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getCategoryFromPage } from "./helpers/helpers";
import Template from "./pages/template";
import { endpoint } from "./helpers/config";
import Footer from "./components/footer";

console.log("MAIN", endpoint);

const STATE = {
  pages: [],
};

(async () => {
  try {
    const response = await fetch(`${endpoint}/pages/?populate=deep`);
    const data = await response.json();

    data.data.forEach((d) => {
      // console.log("Category", d.attributes.category);

      const category = d?.attributes?.category?.data?.attributes;

      // console.log("category", category);

      const page = d.attributes;
      const slug = page.slug === "." ? "/" : page.slug;
      const obj = {
        path: category.slug !== "page" ? `/${category.slug}/${slug}` : slug,
        element: <Template page={page} />,
      };

      STATE.pages.push(obj);

      console.log("Pages", createBrowserRouter(STATE.pages));
    });

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <Navigation />
        <RouterProvider router={createBrowserRouter(STATE.pages)} />
        <Footer />
      </React.StrictMode>
    );
  } catch (error) {
    console.warn(error);
  }
})();
