import { EditCursor } from "../components/EditCursor";
import { useState } from "react";
export function Name({ setActiveSection, isSectionActive }) {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        contenteditable="false"
        className={`section ${isSectionActive ? "highlight-section" : ""}`}
        id="name"
        onClick={setActiveSection}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        John Doe
        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
