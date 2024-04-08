import Hero from "../components/Hero";
import Technologies from "../components/technologies";
import Wrapper from "../components/wrapper";
import TriangleBefore from "../components/triangleBefore";
import TriangleAfter from "../components/triangleAfter";
import SectionTriangle from "../components/sectionTriangle";
import Services from "../components/services";

let isTriangleSection = false;

const parseComponent = (component) => {
  if (isTriangleSection) return <SectionTriangle>{component}</SectionTriangle>;

  return component;
};

function Template({ page }) {
  if (Object.keys(page).length === 0) return <h1 className="text-dark-400 text-2xl">error: Page not found</h1>;
  let components = [];

  console.log("BLOCKS", page);

  if (page.length === 0 || page.filter((p) => p.attrs?.name?.includes("acf")).length === 0) {
    return (
      <Wrapper>
        <h1 className="text-dark-400 text-2xl text-center mx-auto block">{page.Name}</h1>
      </Wrapper>
    );
  } else {
    page.map((block) => {
      const { blockName } = block;

      const data = block?.attrs?.data;
      if (!data) return;

      if (blockName === "acf/triangle-section") {
        isTriangleSection = data.type === "start";
        components.push(data.type === "start" ? <TriangleBefore /> : <TriangleAfter />);
      }

      if (blockName === "acf/hero-banner-standard") components.push(parseComponent(<Hero details={data} />));
      if (blockName === "acf/technologies") components.push(parseComponent(<Technologies details={data} />));
      if (blockName === "acf/services") components.push(parseComponent(<Services details={data} />));
    });
  }

  return components.map((Comp, i) => <div key={i}>{Comp}</div>);
}
export default Template;
