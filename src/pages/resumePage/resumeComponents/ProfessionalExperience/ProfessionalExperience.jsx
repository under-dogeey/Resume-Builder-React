import { EditableElement } from "../../components/EditableElement";
import { EditableHTML } from "../../components/EditableHTML";
import { EditCursor } from "../../components/EditCursor";
import { useState } from "react";

export function ProfessionalExperience({
  setActiveSection,
  isSectionActive,
  setActiveElement,
  activeElement,
  setActiveTextEditor,
  setTextContent,
}) {
  const [experienceName, setExperienceName] = useState("Fake Club");
  const [location, setLocation] = useState("Fake City, FA");
  const [position, setPosition] = useState("Faker");
  const [timePeriod, setTimePeriod] = useState("Month 2069-Present");
  const [experienceDetails, setExperienceDetails] = useState(
    `<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>`,
  );

  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        className={`section special ${
          isSectionActive ? "highlight-section" : ""
        }`}
        id="professional-experience"
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
            className="experience-name"
            value={experienceName}
            active={activeElement === "experience-name"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("experience-name");
                setActiveTextEditor(true);
                setTextContent(experienceName);
              }
            }}
          />
          <EditableElement
            className="professional-experience.location"
            value={location}
            active={activeElement === "professional-experience.location"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("professional-experience.location");
                setActiveTextEditor(true);
                setTextContent(location);
              }
            }}
          />
        </div>

        <div className="left-right-indent">
          <EditableElement
            className="position"
            value={position}
            active={activeElement === "position"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("position");
                setActiveTextEditor(true);
                setTextContent(position);
              }
            }}
          />
          <EditableElement
            className="professional-experience.time-period"
            value={timePeriod}
            active={activeElement === "professional-experience.time-period"}
            onActivate={() => {
              if (isSectionActive) {
                setActiveElement("professional-experience.time-period");
                setActiveTextEditor(true);
                setTextContent(timePeriod);
              }
            }}
          />
        </div>

        <EditableHTML
          className="experience-details"
          html={experienceDetails}
          active={activeElement === "experience-details"}
          onActivate={() => {
            if (isSectionActive) {
              setActiveElement("experience-details");
              setActiveTextEditor(true);
              setTextContent(experienceDetails);
            }
          }}
        />

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
