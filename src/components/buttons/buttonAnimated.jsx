import { Link } from "react-router-dom";
import { linkClicked } from "../../helpers/helpers";
Link;
function ButtonAnimated(props) {
  return (
    <Link
      onClick={linkClicked}
      className={`relative flex items-center justify-center w-auto px-8 ml-0 text-base font-medium leading-snug text-white h-14 sm:mt-0 group ${props.className ?? ""}`}
      to={props.url}>
      <span className="absolute top-0 left-0 z-10 block w-full h-full transition-all ease-in-out rounded-full bg-gradient-to-r duration-250 from-dark-800 to-dark-900 md:w-14 md:group-hover:w-full"></span>
      <span className="relative z-20">{props.text}</span>
    </Link>
  );
}
export default ButtonAnimated;
