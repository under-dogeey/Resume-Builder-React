import { EditCursor } from "../../components/EditCursor";
import { EditableElement } from "../../components/EditableElement";
import { useState } from "react";

export function Projects({
  setActiveSection,
  isSectionActive,
  setActiveElement,
  activeElement,
  setActiveTextEditor,
  setTextContent,
}) {
  const [projectName, setProjectName] = useState(
    "<strong>Fake Project</strong>",
  );
  const [timePeriod, setTimePeriod] = useState("<em>Month 2069-Present</em>");
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
          <EditableElement
            className="project-name"
            html={projectName}
            active={activeElement === "project-name"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("project-name");
                setActiveTextEditor(true);
                setTextContent(projectName);
              }
            }}
          />

          <EditableElement
            className="projects time-period"
            html={timePeriod}
            active={activeElement === "projects time-period"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("projects time-period");
                setActiveTextEditor(true);
                setTextContent(timePeriod);
              }
            }}
          />
        </div>

        <EditableElement
          as="ul"
          className="project-details"
          html={projectDetails}
          active={activeElement === "project-details"}
          onActivate={() => {
            if (isSectionActive) {
              setActiveElement("project-details");
              setActiveTextEditor(true);
              setTextContent(projectDetails);
            }
          }}
        />

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
