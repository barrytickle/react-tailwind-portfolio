import PropTypes from "prop-types";

function ButtonSolidRound(props) {
  return (
    <a
      className={`flex items-center justify-center w-auto px-8 py-4 text-base font-semibold leading-snug transition ease-in-out bg-white rounded-full h-14 duration-250 text-dark-900 hover:text-white focus:outline-none hover:bg-dark-900 ${props.className}`}
      href={props.url}>
      {props.text}
    </a>
  );
}

ButtonSolidRound.defaultProps = {
  url: "/",
  text: "Hello World",
};

ButtonSolidRound.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default ButtonSolidRound;
