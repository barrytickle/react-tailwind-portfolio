import Hero from "../components/Hero";
import Technologies from "../components/technologies";
import Wrapper from "../components/wrapper";

function Template({ page }) {
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
    page.blocks.map((block) => {
      const { __component } = block;

      if (__component === "components.hero") components.push(<Hero details={block} />);
      if (__component === "components.technologies") components.push(<Technologies details={block} />);
    });
  }

  return components.map((Comp, i) => <div key={i}>{Comp}</div>);
}
export default Template;
