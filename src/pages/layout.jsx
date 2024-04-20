import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

{
  /* <Outlet /> */
}
