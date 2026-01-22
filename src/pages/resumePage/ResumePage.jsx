import "./resumePage.css";
import "../../assets/theme.css";
import { useState } from "react";
import { Name } from "./resumeComponents/Name";
import { Information } from "./resumeComponents/Information/Information";
import { AboutMe } from "./resumeComponents/AboutMe";
import { ProfessionalExperience } from "./resumeComponents/ProfessionalExperience/ProfessionalExperience";
import { Projects } from "./resumeComponents/Projects/Projects";
import { Education } from "./resumeComponents/Education/Education";
import { AdditionalSkills } from "./resumeComponents/AdditionalSkills";
import { TextEditor } from "./components/TextEditor";

export function ResumePage() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeElement, setActiveElement] = useState(null);

  return (
    <>
      <div className="font-type">
        <main
          onClick={() => {
            setActiveSection("");
            setActiveElement("");
          }}
        >
          <div id="resume-box" onClick={(event) => event.stopPropagation()}>
            <Name
              setActiveSection={() => {
                setActiveSection("name");
                activeSection !== "name" ? setActiveElement("") : null;
              }}
              isSectionActive={activeSection === "name"}
            ></Name>

            <hr className="line-break"></hr>

            <Information
              setActiveSection={() => {
                setActiveSection("information");
                activeSection !== "information" ? setActiveElement("") : null;
              }}
              isSectionActive={activeSection === "information"}
              setActiveElement={setActiveElement}
              activeElement={activeElement}
            ></Information>

            <hr className="line-break"></hr>

            <AboutMe
              setActiveSection={() => {
                setActiveSection("about-me");
                activeSection !== "about-me" ? setActiveElement("") : null;
              }}
              isSectionActive={activeSection === "about-me"}
            ></AboutMe>

            <div className="section-title">professional experience</div>

            <hr className="line-break"></hr>

            <ProfessionalExperience
              setActiveSection={() => {
                setActiveSection("professional-experience");
                activeSection !== "professional-experience"
                  ? setActiveElement("")
                  : null;
              }}
              isSectionActive={activeSection === "professional-experience"}
              setActiveElement={setActiveElement}
              activeElement={activeElement}
            ></ProfessionalExperience>

            <div className="section-title">projects</div>

            <hr className="line-break"></hr>

            <Projects
              setActiveSection={() => {
                setActiveSection("projects");
                activeSection !== "projects" ? setActiveElement("") : null;
              }}
              isSectionActive={activeSection === "projects"}
              setActiveElement={setActiveElement}
              activeElement={activeElement}
            ></Projects>

            <div className="section-title">education</div>

            <hr className="line-break"></hr>

            <Education
              setActiveSection={() => {
                setActiveSection("education");
                activeSection !== "education" ? setActiveElement("") : null;
              }}
              isSectionActive={activeSection === "education"}
              setActiveElement={setActiveElement}
              activeElement={activeElement}
            ></Education>

            <div className="section-title">additional skills</div>

            <hr className="line-break"></hr>

            <AdditionalSkills
              setActiveSection={() => {
                setActiveSection("additional-skills");
                activeSection !== "additional-skills"
                  ? setActiveElement("")
                  : null;
              }}
              isSectionActive={activeSection === "additional-skills"}
            ></AdditionalSkills>

            {/*<button id="save-button">Save as PDF</button>*/}
          </div>

          <TextEditor />
        </main>
      </div>
    </>
  );
}
