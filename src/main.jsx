import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/navigation";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import CaseStudy from "./pages/caseStudy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/case-study/:caseStudy",
    element: <CaseStudy />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </React.StrictMode>
);
