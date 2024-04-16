import Wrapper from "./wrapper";

export default function LargeText({ details }) {
  console.log(details);

  const positionMap = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  console.log(details.position, positionMap["center"], positionMap[details.position]);

  return (
    <>
      <Wrapper className={"text-4xl text-white max-w-4xl mx-auto font-light mb-8 px-4"}>
        <p className=" text-left z-30 inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-800 to-dark-900">
          {details.tag}
        </p>
        <h2 className={"text-6xl font-extrabold mb-8"}>{details.title}</h2>
        <p className={positionMap[details.position] ?? ""}>{details.content}</p>
      </Wrapper>
    </>
  );
}
