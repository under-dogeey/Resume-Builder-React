import { EditCursor } from "../components/EditCursor";
import { useState } from "react";
export function Name({
  name,
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
        id="name"
        onClick={() => {
          setActiveSection();
          setActiveTextEditor();
          setTextContent(name);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {name}
        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
