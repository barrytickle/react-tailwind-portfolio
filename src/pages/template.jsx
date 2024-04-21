import Hero from "../components/Hero";
import Technologies from "../components/technologies";
import Wrapper from "../components/wrapper";
import TriangleBefore from "../components/triangleBefore";
import TriangleAfter from "../components/triangleAfter";
import SectionTriangle from "../components/sectionTriangle";
import Services from "../components/services";
import LargeText from "../components/largeText";
import CaseStudyHero from "../components/caseStudyHero";

import { Helmet } from "react-helmet";
// import Timeline from "../components/timeline";
import FeaturedCaseStudies from "../components/featuredCaseStudies";

import HeroLargeText from "../components/heroLargeText";
import ImageCaption from "../components/imageCaption";
import Timeline from "../components/timeline";
import ContactForm from "../components/contactForm";
import ContentZone from "../components/contentZone";
import HeroColumn from "../components/heroColumn";

// https://display.framer.website/

let isTriangleSection = false;

const parseComponent = (component) => {
  if (isTriangleSection) return <SectionTriangle>{component}</SectionTriangle>;

  return component;
};

function Template(props) {
  const page = props?.page?.element?.props?.page;

  console.log("WHAT IS THE PAGE?", props, page);
  if (Object.keys(page).length === 0) return <h1 className="text-dark-400 text-2xl">error: Page not found</h1>;
  let components = [];

  console.log("BLOCKS", page.blocks);

  if (page?.blocks?.length === 0) {
    return (
      <Wrapper>
        <h1 className="text-dark-400 text-2xl text-center mx-auto block">{page.Name}</h1>
      </Wrapper>
    );
  } else {
    page?.blocks?.map((block) => {
      const { __component } = block;

      if (__component === "components.triangle-section") {
        isTriangleSection = block.position === "start";
        components.push(block.position === "start" ? <TriangleBefore /> : <TriangleAfter />);
      }

      if (__component === "components.hero-standard") components.push(parseComponent(<Hero details={block} />));
      if (__component === "components.technologies") components.push(parseComponent(<Technologies details={block} />));
      if (__component === "components.services") components.push(parseComponent(<Services details={block} />));
      if (__component === "components.large-text") components.push(parseComponent(<LargeText details={block} />));
      if (__component === "components.case-study-header")
        components.push(parseComponent(<CaseStudyHero details={block} />));

      if (__component === "components.featured-case-studies")
        components.push(parseComponent(<FeaturedCaseStudies details={block} />));
      if (__component === "components.hero-large-text")
        components.push(parseComponent(<HeroLargeText details={block} />));

      if (__component === "components.image-caption") components.push(parseComponent(<ImageCaption details={block} />));
      if (__component === "components.timeline") components.push(parseComponent(<Timeline details={block} />));
      if (__component === "components.contact-form") components.push(parseComponent(<ContactForm details={block} />));
      if (__component === "components.content-zone") components.push(parseComponent(<ContentZone details={block} />));
      if (__component === "components.hero-column") components.push(parseComponent(<HeroColumn details={block} />));
    });

    // components.push(<Timeline />);
  }

  //Hello world
  return (
    <>
      <Helmet>
        <title>
          {page.name === "Homepage" || page.name === "" ? "Home" : page.name} | Barry Tickle | Web Developer in
          Newton-le-willows
        </title>
      </Helmet>
      {components.map((Comp, i) => (
        <div
          id={Comp.__component}
          key={i}>
          {Comp}
        </div>
      ))}
    </>
  );
}
export default Template;
