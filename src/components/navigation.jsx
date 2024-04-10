import { useEffect, useState } from "react";
import ButtonSolidRound from "./buttons/buttonSolidRound";
import { endpoint } from "../helpers/config";
function Navigation() {
  const [links, setLinks] = useState({});

  useEffect(() => {
    (async () => {
      if (Object.keys(links).length > 0) return;
      const response = await fetch(`${endpoint}/navigation?populate=*`);
      if (response.status !== 200) return;
      const data = await response.json();

      setLinks(data.data.attributes);
    })();
  }, [links]);

  return (
    <header className="bg-dark-900">
      <nav className="flex items-center justify-between w-full container mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            {/* Main Logo */}
            <a
              href="/"
              className="block text-2xl font-black md:hidden lg:block group">
              <span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">Barry</span>
              <span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">Tickle</span>
            </a>
            {/* Condensed logo for smaller screens  */}
            <a
              href="/"
              className="hidden text-3xl font-black md:block lg:hidden group">
              <span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">B</span>
              <span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">T</span>
            </a>
          </div>
          <div className="hidden md:flex justify-between items-center md:space-x-0.5 lg:space-x-2 text-xl md:text-base font-medium text-dark-300">
            {links?.navigationUrls?.map((link, ind) => {
              return (
                <a
                  href={link.link}
                  key={ind}
                  className="block px-4 py-1 transition duration-200 ease-in-out rounded-full sm:inline-block hover:text-white hover:bg-dark-700">
                  {link.label}
                </a>
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
