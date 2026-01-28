import { EditCursor } from "../../components/EditCursor";
import { EditableElement } from "../../components/EditableElement";
import { useState } from "react";

export function Education({
  setActiveSection,
  isSectionActive,
  setActiveElement,
  activeElement,
  setActiveTextEditor,
  setTextContent,
}) {
  const [school, setSchool] = useState(
    "<strong>Fake State University</strong>",
  );
  const [location, setLocation] = useState("<strong>Fake City, FA</strong>");
  const [degree, setDegree] = useState("B.S, Fake Major");
  const [timePeriod, setTimePeriod] = useState("<em>Month 2069-Present<em>");
  const [gpa, setGpa] = useState("GPA: 0.1/4.0");

  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        className={`section special ${
          isSectionActive ? "highlight-section" : ""
        }`}
        id="education"
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
            className="school"
            html={school}
            active={activeElement === "school"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("school");
                setActiveTextEditor(true);
                setTextContent(school);
              }
            }}
          />

          <EditableElement
            className="education location"
            html={location}
            active={activeElement === "education location"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("education location");
                setActiveTextEditor(true);
                setTextContent(location);
              }
            }}
          />
        </div>

        <div className="left-right-indent">
          <EditableElement
            className="degree"
            html={degree}
            active={activeElement === "degree"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("degree");
                setActiveTextEditor(true);
                setTextContent(degree);
              }
            }}
          />

          <EditableElement
            className="education time-period"
            html={timePeriod}
            active={activeElement === "education time-period"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("education time-period");
                setActiveTextEditor(true);
                setTextContent(timePeriod);
              }
            }}
          />
        </div>

        <div className="left-right-indent">
          <EditableElement
            className="gpa"
            html={gpa}
            active={activeElement === "gpa"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("gpa");
                setActiveTextEditor(true);
                setTextContent(gpa);
              }
            }}
          />
        </div>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
