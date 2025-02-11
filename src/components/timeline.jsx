import Wrapper from "./Wrapper";

function Timeline({ details }) {
  return (
    <Wrapper className={"text-4xl text-white max-w-4xl mx-auto font-light mb-8"}>
      <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
          {details.tag}
        </p>
        <h2 className="text-6xl font-extrabold mt-4 mb-12 text-white">{details.title}</h2>

        {details.timelineEntry?.map((entry, ind) => {
          return (
            <div
              className="pb-12 mt-12 border-b-[0.5px] border-dark-500"
              key={ind}>
              <div className="flex flex-col md:flex-row justify-between">
                <h3 className=" w-full mb-3 md:mb-0 md:w-1/2">{entry.dateRange}</h3>
                <div className="flex flex-col w-full md:w-1/2">
                  <h3 className="text-3xl">
                    {entry.jobTitle} <span className="text-dark-500">{entry.company ? `at ${entry.company}` : ""}</span>
                  </h3>
                  <p className="text-xl text-dark-400 mt-3">{entry.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
}

export default Timeline;
