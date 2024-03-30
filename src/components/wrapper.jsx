function Wrapper(props) {
  return <div className={`w-full max-w-screen-xl mx-auto portfolio-wrapper ${props.className}`}>{props.children}</div>;
}
export default Wrapper;
