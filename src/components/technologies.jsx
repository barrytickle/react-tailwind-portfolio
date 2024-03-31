import { url } from "../helpers/config";

import "external-svg-loader";

function Technologies({ details }) {
  console.log("Technologies details", details);
  return (
    <section className="max-w-screen-xl px-4 pt-12 pb-10 mx-auto md:pb-12 md:pt-16 sm:px-6 lg:px-8">
      {/* Section text */}
      <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
        <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
          {details.tag ?? "My Skills"}
        </p>
        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          {details.title ?? "What technologies do I currently work with?"}
        </h2>
        <p className="mt-6 text-xl text-dark-300 mb-12">
          {details.description ??
            "Each technology used within web plays a vital role in creating robust, user-friendly web experiences. 🌟"}
        </p>
      </div>

      {/* Logos */}
      {/* <div className="max-w-screen-lg mx-auto mt-12 lg:mt-14"> */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3 technology-images">
        {/* Item */}

        {details.images.map((img, ind) => {
          const image = img.image.data.attributes;

          console.log("Tech image", image);

          let tag = "";
          if (image.ext === ".svg") {
            tag = (
              <svg
                // eslint-disable-next-line react/no-unknown-property
                data-src={`${url}${image.url}`}
                fill="currentColor"
                height="100px"
              />
            );
          }

          console.log("TAG", tag);

          return (
            <div
              key={ind}
              className="flex items-center justify-center w-full transition duration-200 ease-in-out h-36 rounded-3xl bg-dark-700 hover:bg-dark-800 hover:text-white text-dark-400">
              {tag}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Technologies;
