import { url } from "../helpers/config";

function CaseStudyHero({ details }) {
  return (
    <>
      <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Hero text */}
          <div className="w-full max-w-3xl mx-auto text-center lg:max-w-5xl">
            <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
              Case study
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-white md:mt-5 sm:text-5xl md:text-6xl">{details.title}</h1>
          </div>

          <div className="flex flex-wrap w-full mx-auto mt-6 text-center">
            <div className="w-full mx-auto lg:w-4/5">
              <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
                {details.description}
              </p>
            </div>
          </div>

          {/* Features container */}
          <div className="grid w-full max-w-lg gap-10 mx-auto mt-12 lg:grid-cols-3 lg:gap-x-12 lg:mt-16 lg:max-w-none">
            {/* Feature */}
            <div className="w-full">
              <h3 className="mt-5 text-2xl font-semibold text-center text-white">Website</h3>
              <p className="mt-2 text-lg leading-relaxed text-center text-dark-300">
                <a
                  href={details.url}
                  target="_blank">
                  {details.url}
                </a>
              </p>
            </div>

            {/*  Feature  */}
            <div className="w-full">
              <h3 className="mt-5 text-2xl font-semibold text-center text-white">Date</h3>
              <p className="mt-2 text-lg leading-relaxed text-center text-dark-300">{details.date}</p>
            </div>

            {/* Feature */}
            <div className="w-full">
              <h3 className="mt-5 text-2xl font-semibold text-center text-white">Technology</h3>
              <p className="mt-2 text-lg leading-relaxed text-center text-dark-300">{details.technologies}</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="mx-auto mt-12 shadow-xl rounded-3xl lg:mt-16 aspect-w-2 aspect-h-1">
            <img
              className="inset-0 object-cover object-center w-full align-middle rounded-3xl h-[640px]"
              src={url + details.featuredImage?.data?.attributes?.formats?.large?.url}
              alt={details?.featuredImage?.data?.attributes?.alternativeText ?? ""}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudyHero;
