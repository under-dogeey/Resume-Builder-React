import { EditCursor } from "../components/EditCursor";
import { useState } from "react";

export function AboutMe({ setActiveSection, isSectionActive }) {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        contenteditable="false"
        className={`section ${isSectionActive ? "highlight-section" : ""}`}
        id="about-me"
        onClick={setActiveSection}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, esse,
        numquam est blanditiis minus consequuntur sed natus dignissimos iste
        quae doloribus unde nemo in quo consequatur officiis quibusdam, nihil
        veritatis.
        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
