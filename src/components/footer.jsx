import { useState, useEffect } from "react";

import { endpoint } from "../helpers/config";
import SingularTestimonial from "./singularTestimonial";
import CtaBlock from "./ctaBlock";

import "external-svg-loader";

import { url } from "../helpers/config";
import { Link } from "react-router-dom";
import { linkClicked } from "../helpers/helpers";

// data-src={`${url}${image?.url}`}

function Footer() {
  const [content, setContent] = useState({});

  let blocks = [];

  useEffect(() => {
    (async () => {
      if (Object.keys(content).length > 0) return;
      const response = await fetch(`${endpoint}/footer?populate=deep`);

      if (response.status !== 200) {
        console.log("Incorrect response, footer");
        return;
      }
      const data = await response.json();

      setContent(data.data.attributes);
    })();
  }, [content]);

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
            <div className="mt-6 text-lg md:mt-8 text-dark-300">
              © {new Date().getFullYear()} Barry Tickle.
              <br />
              All rights reserved.
            </div>
          </div>

          {/* Contact information */}
          <div className="lg:mx-auto">
            <h6 className="text-xl font-semibold text-white">Get in touch</h6>
            <p className="mt-2 text-lg text-dark-300">
              {content.address}
              <br />
              {/* Los Angeles, CA 90001 */}
            </p>
            <p className="mt-6 text-lg text-dark-300">{content.phone}</p>
            <p className="text-lg text-dark-300">{content.email}</p>
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
            <p className="mt-2 text-lg text-dark-300">{content.social_media_text}</p>
            <div className="w-full mt-4 lg:mt-6">
              {/* Social links container */}

              <div className="flex justify-start space-x-4">
                {content.social_media?.map((social, ind) => {
                  return (
                    <a
                      key={ind}
                      className="flex items-center justify-center w-12 h-12 transition duration-300 ease-in-out rounded-full bg-dark-700 hover:text-dark-900 hover:bg-white text-dark-300"
                      href={social.url}
                      alt={social.text}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        width="44"
                        data-src={`${url}${social?.icon?.data?.attributes?.url}`}
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"></svg>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
