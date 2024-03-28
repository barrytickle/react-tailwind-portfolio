import ButtonSolidRound from "./buttons/buttonSolidRound";

function Navigation() {
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
            <a
              href="/"
              className="block px-4 py-1 transition duration-200 ease-in-out rounded-full sm:inline-block hover:text-white hover:bg-dark-700">
              Home
            </a>
            <a
              href="/"
              className="block px-4 py-1 transition duration-200 ease-in-out rounded-full sm:inline-block hover:text-white hover:bg-dark-700">
              About Me
            </a>
            <a
              href="/"
              className="block px-4 py-1 transition duration-200 ease-in-out rounded-full sm:inline-block hover:text-white hover:bg-dark-700">
              Portfolio
            </a>
            <a
              href="/"
              className="block px-4 py-1 transition duration-200 ease-in-out rounded-full sm:inline-block hover:text-white hover:bg-dark-700">
              Blog
            </a>
          </div>
          <div className="hidden md:block">
            <ButtonSolidRound
              text={`Contact me`}
              url={"/contact-me"}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
