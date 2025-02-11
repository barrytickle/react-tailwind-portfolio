import PropTypes from "prop-types";
import { toReactComponentName } from "../helpers/helpers";
import components from "../helpers/importBlocks"; // Adjust the path accordingly

const Page = ({ blocks }) => {
  console.log(blocks);
  return (
    <>
      {blocks.map((block, index) => {
        const name = toReactComponentName(block.__component.split(".")[1]);

        const Component = components[name];
        if (!Component)
          return (
            <h2 key={index}>
              Component not found : {name}, looking for {block.__component.split(".")[1]}.jsx
            </h2>
          );
        return (
          <Component
            key={index}
            details={block}
          />
        );
      })}
    </>
  );
};

Page.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default Page;
