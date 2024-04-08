import ButtonSolidRound from "./buttons/buttonSolidRound";
import ButtonAnimated from "./buttons/buttonAnimated";

function HeroButtons({ show, buttons }) {
  if (!show) return;
  console.log("HERO BUTTONS", buttons);

  return (
    <>
      <div className="z-30 mt-10 sm:flex sm:justify-center lg:justify-start">
        {buttons[0]?.map((button, ind) => {
          console.log("BUTTON", button);
          if (button?.button_type?.includes("white_round"))
            return (
              <ButtonSolidRound
                key={ind}
                url={button.button_url}
                text={button.button_text}
              />
            );

          if (button?.button_type?.includes("animated_circle"))
            return (
              <ButtonAnimated
                key={ind}
                url={button.button_url}
                text={button.button_text}
              />
            );
        })}
      </div>
    </>
  );
}

function Hero({ details }) {
  console.log("DETAILS", details);
  const { tag, title, content } = details;

  return (
    <section className="px-4 pt-6 pb-12 mx-auto max-w-screen-2xl md:pb-16 sm:px-6 lg:px-8">
      <div className="relative shadow-xl rounded-3xl sm:overflow-hidden bg-dark-700">
        {/* Right background diagonal */}
        <svg
          className="absolute inset-y-0 z-20 w-1/4 h-full right-1/4 text-dark-700"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor">
          <polygon points="0,0 100,0 0,100"></polygon>
        </svg>
        <div className="absolute inset-y-0 z-10 w-1/2 h-full left-1/2 bg-dark-800 rounded-r-3xl"></div>

        {/* Hero card content */}
        <div className="relative max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-2 lg:auto-rows-max lg:gap-x-8 xl:gap-x-12 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          {/* Card content text*/}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <p className="z-30 inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-800 to-dark-900">
              {tag}
            </p>
            <div className="z-30 w-full max-w-lg mx-auto mt-6 text-center lg:text-left lg:max-w-none md:max-w-2xl">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                {title}
              </h1>
              <p
                className="mt-6 text-xl text-dark-300"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {/* Hero buttons */}

              <HeroButtons
                show={details.show_buttons === "1"}
                buttons={details.buttons_group}
              />
            </div>
          </div>

          {/* Hero image */}
          <div className="flex items-center justify-center max-w-xl mx-auto mt-12 sm:mt-16 lg:mt-0 lg:max-w-none">
            <img
              src={details?.featured_image?.large}
              className="z-30 object-cover w-auto h-full shadow-md rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
