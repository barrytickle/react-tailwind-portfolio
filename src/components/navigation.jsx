import { useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import OptionsContext from "../context/OptionsContext";
import ButtonSolidRound from "./buttons/buttonSolidRound";

function Navigation() {
  const { store } = useContext(OptionsContext);
  const nav = useRef(null);

  const links = store?.menus?.attributes;

  console.log("Store", store);

  console.log("Links", links);

  const location = useLocation();

  // Will Refresh navigation if the url changes
  useEffect(() => {}, [location.pathname]);

  const toggleHamburger = (e) => {
    let target;
    if (e.target.tagName !== "LABEL") {
      target = e.target.closest("label");
    } else {
      target = e.target;
    }

    target.classList.toggle("active");

    if (target.classList.contains("active")) {
      document.body.classList.add("no-move");
    } else {
      document.body.classList.remove("no-move");
    }
  };

  return (
    <header
      className="bg-dark-900 sticky w-full top-0 mb-3 z-50"
      ref={nav}>
      <nav className="flex items-center justify-between w-full container mx-auto md:px-4 md:py-6 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between w-full px-4 py-6 md:w-[fit-content] md:px-0 md:py-0 bg-dark-900 relative z-50">
            {/* Main Logo */}
            <Link
              to="/"
              className="block text-2xl font-black md:hidden lg:block group">
              <span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">Barry</span>
              <span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">Tickle</span>
            </Link>
            {/* Condensed logo for smaller screens  */}
            <a
              href="/"
              className="hidden text-3xl font-black md:block lg:hidden group">
              <span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">B</span>
              <span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">T</span>
            </a>

            <ButtonSolidRound
              className={"md:hidden"}
              text={links?.cta_link?.label}
              url={links?.cta_link?.url}
            />

            <label
              htmlFor="navigation-toggle"
              onClick={toggleHamburger}
              className="text-white cursor-pointer md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="close h-[25px] w-[25px]"
                viewBox="0 0 384 512">
                <path
                  fill="#ffffff"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="open h-[25px] w-[25px]"
                viewBox="0 0 448 512">
                <path
                  fill="#ffffff"
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </label>
          </div>
          <input
            type={"checkbox"}
            id="navigation-toggle"
            className="peer hidden"
          />
          <div className=" z-40 peer-checked:flex flex-col justify-center peer-checked:top-[80px] duration-500 fixed top-[-100vh] left-0 h-[calc(100vh-80px)] bg-dark-900 w-full md:flex md:justify-between items-center md:space-x-0.5 lg:space-x-2 text-xl md:text-base font-medium text-dark-300 md:static md:w-[fit-content] md:h-[fit-content] md:flex-row">
            {links?.navigationUrls?.map((link, ind) => {
              return (
                <Link
                  to={link.link}
                  key={ind}
                  className={`block mb-4 md:mb-0 px-4 py-1 transition duration-200 ease-in-out rounded-full sm:inline-block hover:text-white hover:bg-dark-700 ${link.link === window.location.pathname ? "text-white" : ""}`}>
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:block">
            <ButtonSolidRound
              text={links?.cta_link?.label}
              url={links?.cta_link?.url}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
