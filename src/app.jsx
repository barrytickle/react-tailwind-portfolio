import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./pages/template";
import Layout from "./pages/layout";

function App({ pages }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          {/* <Route index element={<Template page={pages.filter(p => p.link === "/")[0]}} /> */}
          {pages?.map((page, ind) => {
            console.log("PAGE", page);
            return (
              <Route
                key={ind}
                // index
                index={page.path === "/"}
                path={page.path}
                element={<Template page={page} />}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );

  // return <>

  // </>
}

export default App;
