import Markdown from "markdown-to-jsx";

function ContactForm({ details }) {
  return (
    <section className="px-4 py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16">
          <div className="flex flex-col items-start justify-between sm:items-center lg:items-start">
            {/*Section header */}
            <div>
              <div className="w-full text-left sm:text-center lg:text-left">
                <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
                  {details.tag}
                </p>
              </div>
              <div className="w-full mt-4 text-left md:mt-5 sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">{details.title}</h1>
                <Markdown
                  options={{
                    overrides: {
                      h3: {
                        props: {
                          className:
                            "text-white text-extrabold text-3xl max-w-lg mx-auto text-xl md:mt-5 text-dark-300 sm:max-w-2xl",
                        },
                      },
                      p: {
                        props: {
                          className: "mb-3 max-w-lg mx-auto mt-3 text-xl md:mt-3 text-dark-300 sm:max-w-2xl",
                        },
                      },
                    },
                  }}>
                  {details.text}
                </Markdown>
              </div>
            </div>
          </div>
          {/*Contact form card */}
          <div className="w-full mt-12 lg:mt-0">
            <div className="w-full px-4 py-12 mx-auto shadow-xl rounded-3xl lg:mr-0 lg:ml-auto bg-dark-700 sm:p-16 lg:p-14 xl:p-16">
              {/*Contact form */}
              <form
                action={details.action}
                method="POST">
                {details?.FormFields?.map((field, ind) => {
                  console.log(field.type);
                  if (field.type !== "submit" && field.type !== "textarea")
                    return (
                      <div
                        className={ind > 0 ? "mt-3" : ""}
                        key={ind}>
                        <label
                          htmlFor={field.nameAtt}
                          required={field.required}
                          className="ml-0.5 text-dark-300 font-medium text-sm">
                          {field.label} {field.required ? "*" : ""}
                        </label>
                        <input
                          id={field.nameAtt}
                          type={field.type}
                          required={field.required}
                          name={field.nameAtt}
                          placeholder={field.placeholder}
                          className="w-full p-4 mt-2 text-sm font-medium text-white transition duration-200 ease-in-out border-2 border-solid outline-none h-14 rounded-2xl bg-dark-800 border-dark-800 focus:border-dark-600 focus:outline-none"
                        />
                      </div>
                    );
                  if (field.type === "submit")
                    return (
                      <div
                        className="flex justify-start mt-6"
                        key={ind}>
                        <button
                          type="submit"
                          className="flex items-center justify-center w-auto px-8 py-4 text-base font-semibold leading-snug transition ease-in-out bg-white rounded-full h-14 duration-250 text-dark-900 hover:text-white focus:outline-none hover:bg-dark-900">
                          {field.label}
                        </button>
                      </div>
                    );

                  if (field.type === "textarea")
                    return (
                      <div
                        className={ind > 0 ? "mt-3" : ""}
                        key={ind}>
                        <label
                          htmlFor={field.nameAtt}
                          className="ml-0.5 text-dark-300 font-medium text-sm">
                          {field.label} {field.required ? "*" : ""}
                        </label>
                        <textarea
                          id={field.nameAtt}
                          name={field.nameAtt}
                          className="w-full p-4 mt-2 text-sm font-medium text-white min-h-28 transition duration-200 ease-in-out border-2 border-solid outline-none h-14 rounded-2xl bg-dark-800 border-dark-800 focus:border-dark-600 focus:outline-none"
                          placeholder={field.placeholder}></textarea>
                      </div>
                    );
                })}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
