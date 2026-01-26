import { EditCursor } from "../components/EditCursor";
import { useState } from "react";

export function AboutMe({
  aboutMe,
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
        id="about-me"
        onClick={() => {
          setActiveSection();
          setActiveTextEditor();
          setTextContent(aboutMe);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {aboutMe}
        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
