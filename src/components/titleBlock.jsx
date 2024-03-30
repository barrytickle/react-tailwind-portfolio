import PropType from 'prop-types';

function TitleBlock({subtitle, title}) {
  return (
    <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
      <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
        {subtitle}
      </p>

      <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

TitleBlock.propTypes = {
    subtitle: PropType.
}

export default TitleBlock;
