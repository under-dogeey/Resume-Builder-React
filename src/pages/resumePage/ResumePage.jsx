import "./resumePage.css";
import "../../assets/theme.css";
import { Name } from "./resumeComponents/Name";
import { Information } from "./resumeComponents/Information";
import { AboutMe } from "./resumeComponents/AboutMe";
import { ProfessionalExperience } from "./resumeComponents/ProfessionalExperience";
import { Projects } from "./resumeComponents/Projects";
import { Education } from "./resumeComponents/Education";
import { AdditionalSkills } from "./resumeComponents/AdditionalSkills";
import { TextEditor } from "./components/TextEditor";
export function ResumePage() {
  return (
    <>
      <div className="font-type">
        <main>
          <div id="resume-box">
            <Name></Name>

            <hr className="line-break"></hr>

            <Information></Information>

            <hr className="line-break"></hr>

            <AboutMe></AboutMe>

            <div className="section-title">professional experience</div>

            <hr className="line-break"></hr>

            <ProfessionalExperience></ProfessionalExperience>

            <div className="section-title">projects</div>

            <hr className="line-break"></hr>

            <Projects></Projects>

            <div className="section-title">education</div>

            <hr className="line-break"></hr>

            <Education></Education>

            <div className="section-title">additional skills</div>

            <hr className="line-break"></hr>

            <AdditionalSkills></AdditionalSkills>

            <button id="save-button">Save as PDF</button>
          </div>

          <TextEditor></TextEditor>
        </main>
      </div>
    </>
  );
}
