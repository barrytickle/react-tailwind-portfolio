import Wrapper from "./Wrapper";

export default function LargeText({ details }) {
  const positionMap = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <>
      <Wrapper className={"text-4xl text-white max-w-4xl mx-auto font-light mb-8"}>
        <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
          <div className="max-w-screen-md mx-auto text-center lg:max-w-screen-xl">
            <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
              {details.tag}
            </p>

            <h2 className={"text-6xl font-extrabold mb-8 mt-6"}>{details.title}</h2>

            <div className="flex flex-wrap w-full mx-auto mt-6 text-center">
              <div className="w-full mx-auto lg:w-4/5">
                <p
                  className={`text-2xl text-dark-300 font-light tracking-tight sm:text-3xl lg:text-4xl lg:leading-tight ${positionMap[details.position] ?? ""}`}>
                  {details.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
