import { useParams } from "react-router-dom";
import caseStudies from "../content/case-studies/caseStudies";

import { Marked } from "marked";
import { useEffect, useState } from "react";
import Wrapper from "../components/wrapper";
import DOMPurify from "dompurify";
import TitleBlock from "../components/titleBlock";
import ButtonSolidRound from "../components/buttons/buttonSolidRound";

function CaseStudy() {
  let params = useParams();

  const [post, setPost] = useState("");
  const [content, setContent] = useState("");
  const [filter, setFilter] = useState({});

  const findCaseStudy = () => {
    const CS = caseStudies.filter(
      (study) => study.slug === params.caseStudy || study.title.toLowerCase().replace(/\s/g, "-") === params.caseStudy
    );

    if (CS.length > 0) setFilter(CS[0]);
  };

  useEffect(() => {
    try {
      if (Object.keys(filter).length === 0) findCaseStudy();

      if (post === "") {
        import(`../content/case-studies/${filter.file}`)
          .then((res) => {
            fetch(res.default)
              .then((res) => res.text())
              .then((res) => setPost(res))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }

      if (content === "") {
        const marked = new Marked();
        setContent(marked.parse(post));
      }
    } catch (error) {
      console.warn(error);
    }
  }, [post, content, filter]);

  return (
    <Wrapper className="mt-8">
      <TitleBlock
        subtitle={filter.tag}
        title={filter.title}
      />
      <p className="text-dark-400 max-w-[768px] mx-auto mt-8 mb-12 text-center">{filter.text}</p>
      <div className="flex justify-center">
        <ButtonSolidRound
          text={"View website"}
          url={filter.site}
        />
      </div>
      <div className="relative mx-auto mt-12 shadow-xl rounded-3xl lg:mt-16 aspect-w-2 aspect-h-1 h-[550px] mb-12">
        <img
          className="absolute inset-0 object-cover object-center w-full align-middle rounded-3xl h-[550px]"
          src={filter.image}
        />
      </div>
      <div
        className="[&_*]:text-dark-400 portfolio-case-study--copy"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></div>
    </Wrapper>
  );
}
export default CaseStudy;
