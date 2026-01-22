import { ProjectName } from "./elements/ProjectName";
import { ProjectDetails } from "./elements/ProjectDetails";
import { TimePeriod } from "./elements/TimePeriod";
import { EditCursor } from "../../components/EditCursor";
import { useState } from "react";

export function Projects({
  setActiveSection,
  isSectionActive,
  setActiveElement,
  activeElement,
}) {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        className={`section special ${
          isSectionActive ? "highlight-section" : ""
        }`}
        id="projects"
        onClick={setActiveSection}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="left-right-indent">
          <ProjectName
            setActiveElement={() => {
              isSectionActive ? setActiveElement("project-name") : null;
            }}
            active={activeElement === "project-name"}
          ></ProjectName>
          <TimePeriod
            setActiveElement={() => {
              isSectionActive ? setActiveElement("projects.time-period") : null;
            }}
            active={activeElement === "projects.time-period"}
          ></TimePeriod>
        </div>

        <ProjectDetails
          setActiveElement={() => {
            isSectionActive ? setActiveElement("project-details") : null;
          }}
          active={activeElement === "project-details"}
        ></ProjectDetails>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
