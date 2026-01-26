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
  setActiveTextEditor,
  setTextContent,
}) {
  const [projectName, setProjectName] = useState("Fake Project");
  const [timePeriod, setTimePeriod] = useState("Month 2069-Present");
  const [projectDetails, setProjectDetails] =
    useState(`<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>`);

  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        className={`section special ${
          isSectionActive ? "highlight-section" : ""
        }`}
        id="projects"
        onClick={(event) => {
          setActiveSection();
          if (event.target !== event.currentTarget) {
            return;
          } else {
            setActiveTextEditor(false);
            setActiveElement("");
          }
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="left-right-indent">
          <ProjectName
            projectName={projectName}
            setActiveElement={() => {
              if (isSectionActive) {
                setActiveElement("project-name");
                setActiveTextEditor(true);
                setTextContent(projectName);
              }
            }}
            active={activeElement === "project-name"}
          ></ProjectName>
          <TimePeriod
            timePeriod={timePeriod}
            setActiveElement={() => {
              if (isSectionActive) {
                setActiveElement("projects.time-period");
                setActiveTextEditor(true);
                setTextContent(timePeriod);
              }
            }}
            active={activeElement === "projects.time-period"}
          ></TimePeriod>
        </div>

        <ProjectDetails
          projectDetails={projectDetails}
          setActiveElement={() => {
            if (isSectionActive) {
              setActiveElement("project-details");
              setActiveTextEditor(true);
              setTextContent(projectDetails);
            }
          }}
          active={activeElement === "project-details"}
        ></ProjectDetails>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
