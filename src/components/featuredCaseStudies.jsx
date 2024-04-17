import ButtonSolidRound from "./buttons/buttonSolidRound";
import { url } from "../helpers/config";

function FeaturedCaseStudies({ details }) {
  console.log("Featured Details", details, details.pages.data);
  return (
    <section className="px-4 pt-12 pb-10 md:pb-12 md:pt-16  sm:px-6 lg:px-8">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Featured work section header */}
        <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
          <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
            {details.tag}
          </p>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">{details.title}</h2>
          <ButtonSolidRound
            className={"w-[fit-content] mx-auto mt-8"}
            url="case-studies"
            text="View all case studies"
          />
        </div>

        {/* Featured work */}
        <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-56 lg:pb-24">
          {/* Work item */}

          {details.pages.data.map((caseStudy, ind) => {
            let header = caseStudy.attributes.blocks.filter((f) => f.__component === "components.case-study-header");
            if (header.length === 0) return <p key={ind}>No case study found</p>;

            header = header[0];

            console.log("HEADER", header);

            return (
              <div key={ind}>
                <div className="relative max-w-lg mx-auto lg:max-w-none lg:mx-none">
                  <div className="relative w-full h-64 bg-center shadow-xl lg:rounded-3xl rounded-t-3xl lg:pt-[46%] lg:w-[90%] lg:h-full">
                    <img
                      src={url + header?.featuredImage?.data?.attributes?.formats?.large?.url}
                      alt="Case study 1"
                      className="absolute inset-0 object-cover object-center w-full h-full lg:rounded-3xl rounded-t-3xl"
                    />
                    <p className="inline-flex items-center justify-center px-6 py-2 mt-4 ml-6 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r sm:ml-8 lg:hidden from-dark-800 to-dark-900">
                      Website
                    </p>
                  </div>
                  <div className="relative bottom-0 right-0 z-20 block w-full h-auto p-6 shadow-xl lg:rounded-3xl rounded-b-3xl sm:p-8 lg:p-12 bg-dark-700 lg:absolute lg:-bottom-25 lg:w-1/3 lg:h-full">
                    <div className="h-full lg:flex lg:flex-col lg:justify-between">
                      <div className="hidden lg:block">
                        <p className="inline-flex items-center justify-center px-6 py-2 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-800 to-dark-900">
                          Website
                        </p>
                      </div>
                      <div className="flex flex-wrap w-full">
                        <h3 className="text-3xl font-bold text-white lg:text-4xl">{caseStudy.attributes?.name}</h3>
                        <p className="mt-2 text-base lg:mt-4 text-dark-300 md:text-lg">{header?.description}</p>
                      </div>
                      <div className="mt-8 xl:mt-4 flex">
                        <a
                          className="relative inline-flex items-center justify-center w-auto h-12 px-8 text-base font-medium leading-snug text-white md:h-14 group"
                          href={`${caseStudy.attributes?.category?.data?.attributes?.slug}/${caseStudy?.attributes?.slug}`}>
                          <span className="absolute top-0 left-0 z-10 block w-full h-full transition-all ease-in-out rounded-full bg-gradient-to-r duration-250 from-dark-800 to-dark-900 md:w-14 md:group-hover:w-full"></span>
                          <span className="relative z-20">Case study</span>
                        </a>

                        <ButtonSolidRound
                          url={header?.url}
                          text="Visit Website"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCaseStudies;
