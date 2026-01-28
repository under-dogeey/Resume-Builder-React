import "./resumePage.css";
import "../../assets/theme.css";
import { useState } from "react";
import { EditableSection } from "./components/EditableSection";
import { Information } from "./resumeComponents/Information/Information";
import { ProfessionalExperience } from "./resumeComponents/ProfessionalExperience/ProfessionalExperience";
import { Projects } from "./resumeComponents/Projects/Projects";
import { Education } from "./resumeComponents/Education/Education";
import { TextEditor } from "./components/TextEditor";

export function ResumePage() {
  const [name, setName] = useState("<strong>John Doe</strong>");
  const [aboutMe, setAboutMe] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, esse, numquam est blanditiis minus consequuntur sed natus dignissimos iste quae doloribus unde nemo in quo consequatur officiis quibusdam, nihil veritatis.",
  );
  const [additionalSkills, setAdditionalSkills] =
    useState(`<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>`);

  const [textContent, setTextContent] = useState("");

  const [activeSection, setActiveSection] = useState(null);
  const [activeElement, setActiveElement] = useState(null);
  const [activeTextEditor, setActiveTextEditor] = useState(null);

  return (
    <>
      <main
        onClick={() => {
          setActiveSection("");
          setActiveElement("");
          setActiveTextEditor(false);
        }}
      >
        <div id="resume-stage">
          <div id="resume-box" onClick={(event) => event.stopPropagation()}>
            <EditableSection
              id="name"
              html={name}
              active={activeSection === "name"}
              onActivate={() => {
                setActiveSection("name");
                activeSection !== "name" ? setActiveElement("") : null;
                setActiveTextEditor(true);
                setTextContent(name);
              }}
            />

            <hr className="line-break"></hr>

            <Information
              setActiveSection={() => {
                setActiveSection("information");
                activeSection !== "information" ? setActiveElement("") : null;
              }}
              isSectionActive={activeSection === "information"}
              setActiveElement={setActiveElement}
              activeElement={activeElement}
              setActiveTextEditor={setActiveTextEditor}
              setTextContent={setTextContent}
            ></Information>

            <hr className="line-break"></hr>

            <EditableSection
              id="about-me"
              html={aboutMe}
              active={activeSection === "about-me"}
              onActivate={() => {
                setActiveSection("about-me");
                activeSection !== "about-me" ? setActiveElement("") : null;
                setActiveTextEditor(true);
                setTextContent(aboutMe);
              }}
            />

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
              setActiveTextEditor={setActiveTextEditor}
              setTextContent={setTextContent}
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
              setActiveTextEditor={setActiveTextEditor}
              setTextContent={setTextContent}
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
              setActiveTextEditor={setActiveTextEditor}
              setTextContent={setTextContent}
            ></Education>

            <div className="section-title">additional skills</div>

            <hr className="line-break"></hr>

            <EditableSection
              as="ul"
              id="additional-skills"
              html={additionalSkills}
              active={activeSection === "additional-skills"}
              onActivate={() => {
                setActiveSection("additional-skills");
                activeSection !== "additional-skills"
                  ? setActiveElement("")
                  : null;
                setActiveTextEditor(true);
                setTextContent(additionalSkills);
              }}
            />
          </div>
        </div>
      </main>

      {activeTextEditor && <TextEditor content={textContent}></TextEditor>}
    </>
  );
}
