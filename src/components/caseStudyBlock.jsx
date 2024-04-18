import ButtonSolidRound from "./buttons/buttonSolidRound";

function CaseStudyBlock({ direction, image, url, tag, text, title, site }) {
  return (
    <div className="relative max-w-lg mx-auto lg:max-w-none lg:mx-none lg:mb-[280px]">
      <div className="relative w-full h-64 bg-center bg-cover shadow-xl lg:rounded-3xl rounded-t-3xl lg:pt-[46%] lg:w-[90%] lg:h-full">
        <img
          src={image ?? "https://source.unsplash.com/random/900×700/?fruit"}
          alt={`${title} Case Study`}
          className="absolute inset-0 object-cover object-center w-full h-full lg:rounded-3xl rounded-t-3xl"
        />
        <p className="inline-flex items-center justify-center px-6 py-2 mt-4 ml-6 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r sm:ml-8 lg:hidden from-dark-800 to-dark-900">
          {tag ?? "Enter Tag"}
        </p>
      </div>
      <div
        className={`relative bottom-0 ${direction && direction === "left" ? "left-0" : "right-0"} z-20 block w-full h-auto p-6 shadow-xl lg:rounded-3xl rounded-b-3xl sm:p-8 lg:p-12 bg-dark-700 lg:absolute lg:-bottom-25 lg:w-1/3 lg:h-full`}>
        <div className="h-full lg:flex lg:flex-col lg:justify-between">
          <div className="hidden lg:block">
            <p className="inline-flex items-center justify-center px-6 py-2 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-800 to-dark-900">
              {tag ?? "Enter Tag"}
            </p>
          </div>
          <div className="flex flex-wrap w-full flex-col">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">{title ?? "Enter Title"}</h3>
            <p className="mt-2 text-base lg:mt-4 text-dark-300 md:text-lg">{text ?? "Enter Text"}</p>
          </div>
          <div className="mt-8 xl:mt-4">
            <ButtonSolidRound
              className="mb-3 max-w-[fit-content]"
              url={site}
              text="View Website"
            />
            <a
              className="relative inline-flex items-center justify-center w-auto h-12 px-8 text-base font-medium leading-snug text-white md:h-14 group"
              href={url ? `/case-study/${url}` : "/"}>
              <span className="absolute top-0 left-0 z-10 block w-full h-full transition-all ease-in-out rounded-full bg-gradient-to-r duration-250 from-dark-800 to-dark-900 md:w-14 md:group-hover:w-full"></span>
              <span className="relative z-20">Case study</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CaseStudyBlock;
