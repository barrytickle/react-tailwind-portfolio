import { Outlet } from "react-router-dom";
import CursorDot from "../components/cursor/CursorDot";
import Footer from "../components/Footer";
import Navigation from "../components/navigation";

// https://display.framer.website/

// function Template(props) {
//   const page = props?.page?.element?.props?.page;

//   if (Object.keys(page).length === 0) return <h1 className="text-dark-400 text-2xl">error: Page not found</h1>;
//   let components = [];

//   if (page?.blocks?.length === 0) {
//     return (
//       <Wrapper>
//         <h1 className="text-dark-400 text-2xl text-center mx-auto block">{page.Name}</h1>
//       </Wrapper>
//     );
//   } else {
//     page?.blocks?.map((block) => {
//       const { __component } = block;

//       const name = toReactComponentName(__component.split(".")[1]);

//       const Component = allComponents[name];

//       if (Component) {
//         components.push(
//           <Component
//             details={block}
//             data-component={name}
//           />
//         );
//       } else {
//         console.warn("Component not found", name);
//       }
//     });

//     // components.push(<Timeline />);
//   }

//   //Hello world
//   return (
//     <>
//       <Helmet>
//         <title>
//           {page.name === "Homepage" || page.name === "" ? "Home" : page.name} | Barry Tickle | Web Developer in
//           Newton-le-willows
//         </title>
//         {page.seo?.metaDescription ? (
//           <meta
//             name="description"
//             content={page.seo.metaDescription}
//           />
//         ) : (
//           ""
//         )}
//       </Helmet>
//       {components.map((Comp, i) => (
//         <div
//           data-name={Comp.type.name}
//           // datatype="component"
//           id={Comp.__component}
//           key={i}>
//           {Comp}
//         </div>
//       ))}
//     </>
//   );
// }
// export default Template;

const Template = () => {
  return (
    <main className="bg-dark-900 text-white">
      <Navigation />
      <CursorDot />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Template;
