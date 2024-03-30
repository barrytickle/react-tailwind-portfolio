/* eslint-disable react/no-unescaped-entities */
import ButtonSolidRound from "../components/buttons/buttonSolidRound";
import CaseStudyBlock from "../components/caseStudyBlock";
import Wrapper from "../components/wrapper";
import SectionTriangle from "../components/sectionTriangle";
import Technologies from "../components/technologies";
import TitleBlock from "../components/titleBlock";
import TriangleAfter from "../components/triangleAfter";
import TriangleBefore from "../components/triangleBefore";
import caseStudies from "../content/case-studies/caseStudies";

function HomePage() {
  console.log("CASE STUDIES", caseStudies);
  return (
    <main>
      {/* Hero Section */}
      <section className="px-4 pt-6 pb-12 mx-auto max-w-screen-2xl md:pb-16 sm:px-6 lg:px-8">{/* Hero card */}</section>
      <Technologies />

      <TriangleBefore />
      <SectionTriangle>
        {/*Section text */}
        <div className="max-w-xl mx-auto text-center md:max-w-2xl lg:text-left lg:max-w-screen-xl">
          <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
            What is it I do?
          </p>
          <div className="grid w-full gap-6 mt-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                I create digital products to provide you a robust user experience.
              </h2>
            </div>

            <div className="lg:col-span-2">
              <p className="text-xl text-dark-300">I do a lot of things, here are the services I can provide for you</p>
            </div>
          </div>
        </div>

        {/*Section content */}
        <div className="grid justify-center w-full gap-12 mx-auto mt-12 lg:grid-cols-2 lg:gap-8 lg:mt-16 lg:max-w-screen-xl xl:max-w-screen-xl lg:justify-start">
          {/*Features list */}
          <div>
            {/*Item */}
            <div className="w-full">
              <div className="max-w-lg mx-auto lg:mr-auto xl:mx-auto">
                <div className="relative flex w-full px-8 py-6 shadow-xl rounded-3xl bg-dark-700 sm:px-10">
                  <div className="text-center sm:flex sm:text-left">
                    <div className="w-full sm:w-1/5">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r rounded-2xl text-dark-300 sm:mx-0 from-dark-800 to-dark-900">
                        {/*TablerIcon name: artboard */}
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                          <rect
                            x="8"
                            y="8"
                            width="8"
                            height="8"
                            rx="1"></rect>
                          <line
                            x1="3"
                            y1="8"
                            x2="4"
                            y2="8"></line>
                          <line
                            x1="3"
                            y1="16"
                            x2="4"
                            y2="16"></line>
                          <line
                            x1="8"
                            y1="3"
                            x2="8"
                            y2="4"></line>
                          <line
                            x1="16"
                            y1="3"
                            x2="16"
                            y2="4"></line>
                          <line
                            x1="20"
                            y1="8"
                            x2="21"
                            y2="8"></line>
                          <line
                            x1="20"
                            y1="16"
                            x2="21"
                            y2="16"></line>
                          <line
                            x1="8"
                            y1="20"
                            x2="8"
                            y2="21"></line>
                          <line
                            x1="16"
                            y1="20"
                            x2="16"
                            y2="21"></line>
                        </svg>
                      </div>
                    </div>
                    <div className="w-full mt-3 sm:mt-0">
                      <h5 className="text-lg font-semibold text-white">Web Design</h5>
                      <p className="mt-1 text-base text-dark-300">
                        Design ensures that you know how the end product will look & feel before any commitment to the
                        project is made, this provides a bit of reassurance that you'll be happy with the end product.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Item */}
            <div className="w-full mt-8 lg:mt-5 xl:mt-8 2xl:mt-10 ">
              <div className="max-w-lg mx-auto lg:mr-auto xl:mx-auto">
                <div className="flex w-full px-8 py-6 shadow-xl rounded-3xl bg-dark-700 sm:px-10">
                  <div className="text-center sm:flex sm:text-left">
                    <div className="w-full sm:w-1/5">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r rounded-2xl text-dark-300 sm:mx-0 from-dark-800 to-dark-900">
                        {/*TablerIcon name: code */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                          <polyline points="7 8 3 12 7 16"></polyline>
                          <polyline points="17 8 21 12 17 16"></polyline>
                          <line
                            x1="14"
                            y1="4"
                            x2="10"
                            y2="20"></line>
                        </svg>
                      </div>
                    </div>
                    <div className="w-full mt-3 sm:mt-0">
                      <h5 className="text-lg font-semibold text-white">Web Development</h5>
                      <p className="mt-1 text-base text-dark-300">
                        Development sets the foundation for your business, it allows the website to be built, tested and
                        published to your new audience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Item */}
            <div className="w-full mt-8 lg:mt-5 xl:mt-8 2xl:mt-10">
              <div className="max-w-lg mx-auto lg:mr-auto xl:mx-auto">
                <div className="flex w-full px-8 py-6 shadow-xl rounded-3xl bg-dark-700 sm:px-10">
                  <div className="text-center sm:flex sm:text-left">
                    <div className="w-full sm:w-1/5">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r rounded-2xl text-dark-300 sm:mx-0 from-dark-800 to-dark-900">
                        {/*TablerIcon name: tool */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                          <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="w-full mt-3 sm:mt-0">
                      <h5 className="text-lg font-semibold text-white">Maintenance &amp; Optimization</h5>
                      <p className="mt-1 text-base text-dark-300">
                        Of course, a website wouldn't be complete without frequent Maintenance, ensuring that your
                        website is performing as intended and ensuring that your users are happy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Image collage */}
          <div className="flex items-center justify-center max-w-screen-md lg:max-w-full">
            <div className="grid h-full grid-flow-col grid-rows-2 gap-4">
              <div className="row-span-2 shadow-xl rounded-3xl">
                <img
                  src="/assets/img/office-meeting.jpg"
                  className="object-cover  w-full h-full rounded-3xl max-w-[277px] object-[30%]"
                />
              </div>
              <div className="shadow-xl rounded-3xl">
                <img
                  src="/assets/img/computer-desk.jpg"
                  className="object-cover object-center w-full h-full rounded-3xl"
                />
              </div>
              <div className="shadow-xl rounded-3xl">
                <img
                  src="/assets/img/office-building.jpg"
                  className="object-cover object-center w-full h-full rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionTriangle>
      <TriangleAfter />
      <Wrapper>
        <TitleBlock
          subtitle={"My Work"}
          title={"My builds and designs"}
        />
        <p className="mx-auto container text-center text-dark-300 max-w-[768px] my-5">
          My projects show what I can achieve as an individual, a project should be developed with the user in mind. As
          a web designer user interaction is one of my main aims when visiting a website, making a website look good
          should only be the first steps of developing a system for users. Explore my thought process throughout each of
          my projects, as this is a reflection of what I can provide for you as a service.
        </p>

        {caseStudies.map((study, ind) => {
          console.log("study", study);
          return (
            <>
              <CaseStudyBlock
                title={study.title}
                key={ind}
                url={study.slug ?? study.title.toLowerCase().replace(/\s/g, "-")}
                text={study.text}
                tag={study.tag}
                image={study.image}
                site={study.site}
                direction={ind % 2 === 0 ? "left" : "right"}
              />
            </>
          );
        })}
      </Wrapper>
    </main>
  );
}

export default HomePage;
