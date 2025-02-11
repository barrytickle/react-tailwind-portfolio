import { useEffect, useState } from "react";
import { endpoint, url } from "../helpers/config";
import { generateUrl } from "../helpers/helpers";
import ButtonSolidRound from "./buttons/buttonSolidRound";
import CaseStudyBlock from "./case-study-block";

function FeaturedCaseStudies({ details }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    (async () => {
      if (pages.length > 0) return;

      if (!details.showAllCards) {
        setPages(details?.pages?.data);
        return;
      }

      const caseStudies = await fetch(`${endpoint}/pages/?filters[category][slug][$eq]=case-studies&populate=deep`);
      const res = await caseStudies.json();

      if (res.data && res.data.length > 0) setPages(res.data);
    })();
  }, []);

  console.log("Featured Case Studies", pages);

  if (pages.length === 0) return <p className="text-white text-center">No Pages found</p>;

  return (
    <section
      className="px-4 pt-12 pb-10 md:pb-12 md:pt-16  sm:px-6 lg:px-8"
      data-name="featured-case-studies">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Featured work section header */}
        <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
          {details.tag ? (
            <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
              {details.tag}
            </p>
          ) : (
            ""
          )}

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">{details.title}</h2>

          {details.buttonText ? (
            <ButtonSolidRound
              className={"w-[fit-content] mx-auto mt-8"}
              url="case-studies"
              text="View all case studies"
            />
          ) : (
            ""
          )}
        </div>

        {/* Featured work */}
        <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-56 lg:pb-24">
          {/* Work item */}

          {pages.map((caseStudy, ind) => {
            let header = caseStudy.attributes.blocks.filter((f) => f.__component === "components.case-study-header");
            if (header.length === 0) return <p key={ind}>No case study found</p>;

            header = header[0];

            const even = ind % 2 === 0;

            console.log("Study", caseStudy);

            return (
              <CaseStudyBlock
                key={ind}
                direction={even ? "left" : "right"}
                image={url + header.featuredImage.data.attributes.url}
                tag="Website"
                text={header.description}
                title={header.title}
                site={header.url}
                url={generateUrl(caseStudy)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCaseStudies;
