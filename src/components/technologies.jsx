import { url } from "../helpers/config";

import "external-svg-loader";

function Technologies({ details }) {
  console.log("Technologies details", details);
  return (
    <section className="max-w-4xl px-4 pt-12 pb-10 mx-auto md:pb-12 md:pt-16 sm:px-6 lg:px-8">
      <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
        {details.tag}
      </p>
      <h2 className="text-6xl font-extrabold mt-4 mb-8 text-white">{details.title}</h2>

      <div className="max-w-4xl mx-auto">
        {details.technologyTool.map((tool, ind) => {
          return (
            <a
              className="bg-dark-800 rounded-xl py-4 px-6 mb-4 group cursor-pointer flex justify-between items-center hover:bg-dark-700 duration-200"
              href={tool.url}
              key={ind}>
              <div className="flex">
                <div className="w-16 mr-8">
                  <img
                    src={url + tool.image?.data?.attributes?.url}
                    className="max-w-16 w-full max-h-16 object-contain object-center"
                    alt={tool.title + " icon"}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-white text-xl">{tool.title}</h3>
                  <span className="text-md text-dark-500 text-light">{tool.description}</span>
                </div>
              </div>
              <div className="rounded-full border border-dark-200 justify-center items-center h-[50px] w-[50px] -rotate-45 group-hover:rotate-0 duration-200 hidden md:flex">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path
                    fill="#ffffff"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Technologies;
