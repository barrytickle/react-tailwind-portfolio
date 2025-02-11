import TriangleAfter from "./triangle-after";
import TriangleBefore from "./triangle-before";

function TriangleSection({ details }) {
  const Child = details.position == "start" ? TriangleBefore : TriangleAfter;

  return (
    <>
      <Child />
    </>
  );
}

export default TriangleSection;
