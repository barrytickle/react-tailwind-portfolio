import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OptionsContext from "./context/OptionsContext";
import NotFound from "./pages/notFound";
import Page from "./pages/page";
import Template from "./pages/template";

// https://www.w3schools.com/react/react_router.asp
function App() {
  const { store } = useContext(OptionsContext);

  console.log("App store", store);

  const pages = store?.pages;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Template />}>
          {/* <Route index element={<Template page={pages.filter(p => p.link === "/")[0]}} /> */}
          {pages?.map((page, ind) => {
            page = page.attributes;
            if (!page) return;

            console.log("Page loop", page);
            const category = page.category?.data?.attributes;

            let path = category ? `${category.slug}/${page.slug}` : page.slug;
            path = path.replace(/\/\//g, "/");

            console.log("PATH", path, page.name);

            return (
              <Route
                key={ind}
                index={page.slug === "/"}
                path={path}
                element={<Page blocks={page.blocks} />}
              />
            );
          })}

          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
