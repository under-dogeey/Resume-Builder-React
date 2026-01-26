import { School } from "./elements/School";
import { Location } from "./elements/Location";
import { Degree } from "./elements/Degree";
import { TimePeriod } from "./elements/TimePeriod";
import { GPA } from "./elements/GPA";
import { EditCursor } from "../../components/EditCursor";
import { useState } from "react";

export function Education({
  setActiveSection,
  isSectionActive,
  setActiveElement,
  activeElement,
  setActiveTextEditor,
  setTextContent,
}) {
  const [school, setSchool] = useState("Fake State University");
  const [location, setLocation] = useState("Fake City, FA");
  const [degree, setDegree] = useState("B.S, Fake Major");
  const [timePeriod, setTimePeriod] = useState("Month 2069-Present");
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
          <School
            school={school}
            setActiveElement={() => {
              if (isSectionActive) {
                setActiveElement("school");
                setActiveTextEditor(true);
                setTextContent(school);
              }
            }}
            active={activeElement === "school"}
          ></School>
          <Location
            location={location}
            setActiveElement={() => {
              if (isSectionActive) {
                setActiveElement("education.location");
                setActiveTextEditor(true);
                setTextContent(location);
              }
            }}
            active={activeElement === "education.location"}
          ></Location>
        </div>

        <div className="left-right-indent">
          <Degree
            degree={degree}
            setActiveElement={() => {
              if (isSectionActive) {
                setActiveElement("degree");
                setActiveTextEditor(true);
                setTextContent(degree);
              }
            }}
            active={activeElement === "degree"}
          ></Degree>
          <TimePeriod
            timePeriod={timePeriod}
            setActiveElement={() => {
              if (isSectionActive) {
                setActiveElement("education.time-period");
                setActiveTextEditor(true);
                setTextContent(timePeriod);
              }
            }}
            active={activeElement === "education.time-period"}
          ></TimePeriod>
        </div>

        <div className="left-right-indent">
          <GPA
            gpa={gpa}
            setActiveElement={() => {
              if (isSectionActive) {
                setActiveElement("gpa");
                setActiveTextEditor(true);
                setTextContent(gpa);
              }
            }}
            active={activeElement === "gpa"}
          ></GPA>
        </div>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
