import TriangleAfter from "./TriangleAfter";
import TriangleBefore from "./TriangleBefore";

function TriangleSection({ details }) {
  const Child = details.position == "start" ? TriangleBefore : TriangleAfter;

  return (
    <>
      <Child />
    </>
  );
}

export default TriangleSection;
