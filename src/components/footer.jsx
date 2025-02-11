import { useContext } from "react";

import OptionsContext from "../context/OptionsContext";
import CtaBlock from "./cta-block";
import SingularTestimonial from "./singular-testimonial";

import "external-svg-loader";

import { Link } from "react-router-dom";
import { linkClicked } from "../helpers/helpers";

// data-src={`${url}${image?.url}`}

const Footer = () => {
  const options = useContext(OptionsContext);
  const blocks = [];

  console.log("Footer options", options);
  const content = options?.store?.footer?.attributes;
  if (!content) {
    console.warn("Footer content not found");
    return <></>;
  }

  content?.blocks?.map((block) => {
    if (block.__component === "components.singular-testimonial") blocks.push(<SingularTestimonial details={block} />);
    if (block.__component === "components.cta-block") blocks.push(<CtaBlock details={block} />);
  });

  return (
    <>
      {blocks?.map((block, i) => (
        <div key={i}>{block}</div>
      ))}

      <footer className="px-4 py-12 md:py-16 bg-dark-900 sm:px-6 lg:px-8">
        <div className="grid gap-8 mx-auto lg:max-w-screen-xl sm:max-w-3xl md:grid-cols-3 md:gap-y-12 lg:grid-cols-4">
          {/* Logo and copyright text */}
          <div className="flex flex-col lg:mx-auto">
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-black lg:block group">
                <span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">Barry</span>
                <span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">Tickle</span>
              </a>
            </div>
            <div className="mt-6 text-lg md:mt-4 text-dark-300">
              © {new Date().getFullYear()} Barry Tickle.
              <br />
              All rights reserved.
            </div>
          </div>

          {/* Contact information */}
          <div className="lg:mx-auto">
            <h6 className="text-xl font-semibold text-white">Get in touch</h6>
            {content.address && <p className="mt-2 text-lg text-dark-300">{content.address}</p>}
            {content.phone && <p className="mt-6 text-lg text-dark-300">{content.phone}</p>}
            {content.email && <p className="text-lg text-dark-300">{content.email}</p>}
          </div>

          {/* Site links */}
          <div className="lg:mx-auto">
            <h6 className="text-xl font-semibold text-white">Links</h6>
            <ul className="mt-2 space-y-1 text-lg">
              {content.footer_urls?.map((url, ind) => {
                return (
                  <li
                    key={ind}
                    className="font-medium text-dark-300 hover:text-white">
                    <Link
                      to={url.link}
                      onClick={linkClicked}>
                      {" "}
                      {url.label}{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social links */}
          <div className="sm:col-span-3 lg:col-span-1 lg:mx-auto">
            <h6 className="text-xl font-semibold text-white">Follow us on social media</h6>
            <div className="w-full">
              {/* Social links container */}

              <div className="flex justify-start space-x-4">
                <ul className="mt-2 space-y-1 text-lg">
                  {content.social_media?.map((social, ind) => {
                    return (
                      <li
                        key={ind}
                        className="font-medium text-dark-300 hover:text-white">
                        <Link
                          to={social.url}
                          onClick={linkClicked}>
                          {social.text}{" "}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
