function HeroColumn({ details }) {
  return (
    <div className="w-full max-w-3xl mx-auto text-center lg:max-w-5xl">
      <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
        {details.tag}
      </p>
      <h1 className="mt-4 text-4xl font-extrabold text-white md:mt-5 sm:text-5xl md:text-6xl">{details.title}</h1>
      <p className="max-w-lg mx-auto mt-4 text-xl md:mt-5 text-dark-300 md:max-w-3xl">{details.content}</p>
    </div>
  );
}
export default HeroColumn;
