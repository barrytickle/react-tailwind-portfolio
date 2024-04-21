import Markdown from "markdown-to-jsx";

function ContentZone({ details }) {
  return (
    <section className=" mt-4 mb-8 text-white">
      <h2 className="hidden text-extrabold text-4xl"></h2>
      <div className="max-w-3xl mx-auto">
        <Markdown
          options={{
            overrides: {
              h2: {
                props: {
                  className: "text-white font-extrabold text-4xl",
                },
              },
              h3: {
                props: {
                  className: "text-white font-medium text-3xl  mx-auto text-xl md:mt-5 text-dark-300 ",
                },
              },
              p: {
                props: {
                  className: "mb-3 font-light mx-auto mt-3 text-xl md:mt-3 text-dark-300 ",
                },
              },
              ul: {
                props: {
                  className: "pl-3 my-3",
                },
              },
              li: {
                props: {
                  className: "list-disc mb-3 font-light mx-auto mt-3 text-xl md:mt-3 text-dark-300	",
                },
              },
            },
          }}>
          {details.content}
        </Markdown>
      </div>
    </section>
  );
}

export default ContentZone;
