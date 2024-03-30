import Hero from "../components/Hero";
import Wrapper from "../components/wrapper";

function Template({ page }) {
  if (Object.keys(page).length === 0) return <h1 className="text-dark-400 text-2xl">error: Page not found</h1>;

  if (page.blocks.length === 0) {
    return (
      <Wrapper>
        <h1 className="text-dark-400 text-2xl text-center mx-auto block">{page.Name}</h1>
      </Wrapper>
    );
  } else {
    return page.blocks.map((block, ind) => {
      const { __component } = block;

      console.log(__component);

      if (__component === "components.hero")
        return (
          <Hero
            details={block}
            key={ind}
          />
        );
    });

    // return (
    //   <Hero
    //     details={block}
    //     key={ind}
    //   />
    // );
  }
}

export default Template;
