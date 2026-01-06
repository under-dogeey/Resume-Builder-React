import "./resumePage.css";
import "../../assets/theme.css";
export function ResumePage() {
  return (
    <>
      <div className="font-type">
        <header></header>

        <main>
          <div id="resume-box">
            <div contenteditable="false" className="section" id="name">
              John Doe
            </div>

            <hr className="line-break"></hr>

            <div className="section special" id="information">
              <div
                contenteditable="false"
                className="single-line-item"
                id="address"
              >
                1111 Fake Court, Fake City, FA 11111
              </div>
              <div
                contenteditable="false"
                className="single-line-item"
                id="phone-number"
              >
                (111) 111-1111
              </div>
              <div
                contenteditable="false"
                className="single-line-item"
                id="email"
              >
                fakefakefake@gmail.com
              </div>
            </div>

            <hr className="line-break"></hr>

            <div contenteditable="false" className="section" id="about-me">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              esse, numquam est blanditiis minus consequuntur sed natus
              dignissimos iste quae doloribus unde nemo in quo consequatur
              officiis quibusdam, nihil veritatis.
            </div>

            <div className="section-title">professional experience</div>

            <hr className="line-break"></hr>

            <div className="section special" id="professional-experience">
              <div className="left-right-indent">
                <div contenteditable="false" className="experience-name">
                  Fake Club
                </div>
                <div contenteditable="false" className="location">
                  Fake City, FA
                </div>
              </div>

              <div className="left-right-indent">
                <div contenteditable="false" id="position">
                  Faker
                </div>
                <div contenteditable="false" className="time-period">
                  Month 2069-Present
                </div>
              </div>

              <ul contenteditable="false" className="experience-details">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>

            <div className="section-title">projects</div>
            <hr className="line-break"></hr>
            <div className="section special" id="projects">
              <div className="left-right-indent">
                <div contenteditable="false" className="project-name">
                  Fake Project
                </div>
                <div contenteditable="false" className="time-period">
                  Month 2069-Present
                </div>
              </div>

              <ul contenteditable="false" className="project-details">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>

            <div className="section-title">education</div>
            <hr className="line-break"></hr>
            <div className="section special" id="education">
              <div className="left-right-indent">
                <div contenteditable="false" id="school">
                  Fake State University
                </div>
                <div contenteditable="false" className="location">
                  Fake City, FA
                </div>
              </div>

              <div className="left-right-indent">
                <div contenteditable="false" id="degree">
                  B.S, Fake Major
                </div>
                <div contenteditable="false" className="time-period">
                  Month 2069-Present
                </div>
              </div>

              <div className="left-right-indent">
                <div contenteditable="false" id="gpa">
                  GPA: 0.1/4.0
                </div>
              </div>
            </div>

            <div className="section-title">additional skills</div>
            <hr className="line-break"></hr>
            <div
              contenteditable="false"
              className="section"
              id="additional-skills"
            >
              <ul className="additional-skills-details">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <button id="save-button">Save as PDF</button>
          </div>

          <div id="text-editor">
            <div className="options">
              <button id="bold" className="option-button format">
                <i className="fa-solid fa-bold"></i>
              </button>

              <button id="italic" className="option-button format">
                <i className="fa-solid fa-italic"></i>
              </button>

              <button id="underline" className="option-button format">
                <i className="fa-solid fa-underline"></i>
              </button>

              <button id="strikethrough" className="option-button format">
                <i className="fa-solid fa-strikethrough"></i>
              </button>

              <button id="superscript" className="option-button script">
                <i className="fa-solid fa-superscript"></i>
              </button>

              <button id="subscript" className="option-button script">
                <i className="fa-solid fa-subscript"></i>
              </button>

              <button id="insertUnorderedList" className="option-button">
                <i className="fa-solid fa-list-ol"></i>
              </button>

              <button id="insertOrderedList" className="option-button">
                <i className="fa-solid fa-list"></i>
              </button>

              <button id="undo" className="option-button">
                <i className="fa-solid fa-rotate-left"></i>
              </button>

              <button id="redo" className="option-button">
                <i className="fa-solid fa-rotate-right"></i>
              </button>

              <button id="createLink" className="adv-option-button">
                <i className="fa-solid fa-link"></i>
              </button>

              <button id="unlink" className="option-button">
                <i className="fa-solid fa-link-slash"></i>
              </button>

              <button id="justifyLeft" className="option-button align">
                <i className="fa-solid fa-align-left"></i>
              </button>

              <button id="justifyCenter" className="option-button align">
                <i className="fa-solid fa-align-center"></i>
              </button>

              <button id="justifyRight" className="option-button align">
                <i className="fa-solid fa-align-right"></i>
              </button>

              <button id="justifyFull" className="option-button align">
                <i className="fa-solid fa-align-justify"></i>
              </button>

              <button id="indent" className="option-button spacing">
                <i className="fa-solid fa-indent"></i>
              </button>

              <button id="outdent" className="option-button spacing">
                <i className="fa-solid fa-outdent"></i>
              </button>

              <select id="formatBlock" className="adv-option-button">
                <option value="H1">H1</option>
                <option value="H2">H2</option>
                <option value="H3">H3</option>
                <option value="H4">H4</option>
                <option value="H5">H5</option>
                <option value="H6">H6</option>
              </select>

              <select id="font-name" className="adv-option-button"></select>

              <select id="font-size" className="adv-option-button"></select>

              <div className="input-wrapper">
                <input
                  type="color"
                  id="foreColor"
                  className="adv-option-button"
                ></input>
                <label for="foreColor">Font Color</label>
              </div>

              <div className="input-wrapper">
                <input
                  type="color"
                  id="backColor"
                  className="adv-option-button"
                ></input>
                <label for="backColor">Highlight Color</label>
              </div>
            </div>

            <div id="text-input" contenteditable="true"></div>
          </div>
        </main>
      </div>
    </>
  );
}
