function HeroLargeText({ details }) {
  return (
    <section className="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-[100px] lg:text-[160px] text-white">{details.title}</h1>
        <p className="text-white md:max-w-[50%] lg:max-w-[620px] text-[28px] items-center">{details.content}</p>
      </div>
    </section>
  );
}

export default HeroLargeText;
