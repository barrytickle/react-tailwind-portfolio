import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { linkClicked } from "../../helpers/helpers";

function ButtonSolidRound(props) {
  console.log(props.className, " CLASS NAME");
  return (
    <Link
      onClick={linkClicked}
      className={` ${props.className} ${!!props.className && !props?.className?.includes("w-") ? "w-auto" : ""} flex items-center justify-center  px-8 py-4 text-base font-semibold leading-snug transition ease-in-out bg-white rounded-full h-14 duration-250 text-dark-900 hover:text-white focus:outline-none hover:bg-dark-900 ${props.className}`}
      to={props.url}>
      {props.text}
    </Link>
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
