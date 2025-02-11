import { url } from "../helpers/config";

function ImageCaption({ details }) {
  const imagePosition = {
    top: "object-top",
    middle: "object-center",
    bottom: "object-bottom",
  };

  return (
    <section className="px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8 max-w-4xl">
      <div className="flex flex-col justify-between ">
        <img
          src={url + details.image?.data?.attributes?.url}
          alt={details?.image?.data?.attributes?.alternativeText ?? ""}
          className={`max-h-[560px] rounded-3xl object-cover ${imagePosition[details.imagePosition]}`}
        />
        <p className="text-white centered text-[28px] items-center font-normal mt-12">{details.caption}</p>
      </div>
    </section>
  );
}

export default ImageCaption;
