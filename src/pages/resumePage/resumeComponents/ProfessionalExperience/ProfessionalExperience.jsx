import { ExperienceName } from "./elements/ExperienceName";
import { Location } from "./elements/Location";
import { Position } from "./elements/Position";
import { TimePeriod } from "./elements/TimePeriod";
import { ExperienceDetails } from "./elements/ExperienceDetails";
import { EditCursor } from "../../components/EditCursor";
import { useState } from "react";

export function ProfessionalExperience({
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
        id="professional-experience"
        onClick={setActiveSection}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="left-right-indent">
          <ExperienceName
            setActiveElement={() => {
              isSectionActive ? setActiveElement("experience-name") : null;
            }}
            active={activeElement === "experience-name"}
          ></ExperienceName>
          <Location
            setActiveElement={() => {
              isSectionActive
                ? setActiveElement("professional-experience.location")
                : null;
            }}
            active={activeElement === "professional-experience.location"}
          ></Location>
        </div>

        <div className="left-right-indent">
          <Position
            setActiveElement={() => {
              isSectionActive ? setActiveElement("position") : null;
            }}
            active={activeElement === "position"}
          ></Position>
          <TimePeriod
            setActiveElement={() => {
              isSectionActive
                ? setActiveElement("professional-experience.time-period")
                : null;
            }}
            active={activeElement === "professional-experience.time-period"}
          ></TimePeriod>
        </div>

        <ExperienceDetails
          setActiveElement={() => {
            isSectionActive ? setActiveElement("experience-details") : null;
          }}
          active={activeElement === "experience-details"}
        ></ExperienceDetails>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
