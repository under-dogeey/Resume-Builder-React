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
}) {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        className={`section special ${
          isSectionActive ? "highlight-section" : ""
        }`}
        id="education"
        onClick={setActiveSection}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="left-right-indent">
          <School
            setActiveElement={() => {
              isSectionActive ? setActiveElement("school") : null;
            }}
            active={activeElement === "school"}
          ></School>
          <Location
            setActiveElement={() => {
              isSectionActive ? setActiveElement("education.location") : null;
            }}
            active={activeElement === "education.location"}
          ></Location>
        </div>

        <div className="left-right-indent">
          <Degree
            setActiveElement={() => {
              isSectionActive ? setActiveElement("degree") : null;
            }}
            active={activeElement === "degree"}
          ></Degree>
          <TimePeriod
            setActiveElement={() => {
              isSectionActive
                ? setActiveElement("education.time-period")
                : null;
            }}
            active={activeElement === "education.time-period"}
          ></TimePeriod>
        </div>

        <div className="left-right-indent">
          <GPA
            setActiveElement={() => {
              isSectionActive ? setActiveElement("gpa") : null;
            }}
            active={activeElement === "gpa"}
          ></GPA>
        </div>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
