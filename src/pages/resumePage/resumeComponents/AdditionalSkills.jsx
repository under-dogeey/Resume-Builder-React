import { EditCursor } from "../components/EditCursor";
import { useState } from "react";

export function AdditionalSkills({ setActiveSection, isSectionActive }) {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        contenteditable="false"
        className={`section ${isSectionActive ? "highlight-section" : ""}`}
        id="additional-skills"
        onClick={setActiveSection}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ul className="additional-skills-details">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
