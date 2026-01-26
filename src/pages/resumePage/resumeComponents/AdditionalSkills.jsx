import { EditCursor } from "../components/EditCursor";
import { useState } from "react";

export function AdditionalSkills({
  additionalSkills,
  setActiveSection,
  isSectionActive,
  setActiveTextEditor,
  setTextContent,
}) {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        contenteditable="false"
        className={`section ${isSectionActive ? "highlight-section" : ""}`}
        id="additional-skills"
        onClick={() => {
          setActiveSection();
          setActiveTextEditor();
          setTextContent(additionalSkills);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ul
          className="additional-skills-details"
          dangerouslySetInnerHTML={{ __html: additionalSkills }}
        ></ul>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
