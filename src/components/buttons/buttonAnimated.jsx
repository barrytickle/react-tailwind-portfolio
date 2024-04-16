import PropTypes from "prop-types";

function ButtonAnimated({ url, text }) {
  return (
    <a
      className="relative flex items-center justify-center w-auto px-8 mt-5 ml-0 text-base font-medium leading-snug text-white h-14 sm:ml-4 sm:mt-0 group"
      href={url}>
      <span className="absolute top-0 left-0 z-10 block w-full h-full transition-all ease-in-out rounded-full bg-gradient-to-r duration-250 from-dark-800 to-dark-900 md:w-14 md:group-hover:w-full"></span>
      <span className="relative z-20">{text}</span>
    </a>
  );
}
export default ButtonAnimated;