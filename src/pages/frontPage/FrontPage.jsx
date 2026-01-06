import "./frontPage.css";
import "../../assets/theme.css";
import { Link } from "react-router";
export function FrontPage() {
  return (
    <>
      <div className="font-type">
        <div className="modal" id="disclaimer-modal">
          <div id="disclaimer-modal-header">
            <button data-close-button className="close-button">
              &times;
            </button>
          </div>
          <div id="disclaimer-title">DISCLAIMER!</div>
          <div id="disclaimer-modal-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi
            lacus, lacinia sit amet erat vel, lacinia convallis mi.
            <button data-close-button id="i-understand-button">
              I understand.
            </button>
          </div>
        </div>
        <header>
          <h1 id="header-box">
            <Link to="/" className="heading-link">
              FreeResumeBuilder
            </Link>
          </h1>
        </header>
        <main>
          <section id="hub-flex-container">
            <div id="description-box">
              <h2 id="description-header">Free Resume Builder</h2>

              <p id="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vitae aliquet quam. Duis euismod lacus nec ex
                convallis, et condimentum nisi tempus. Ut et lorem sodales nibh
                egestas tincidunt non vitae nulla.
              </p>

              <button
                data-modal-target="#choose-a-template-modal"
                id="get-started-button"
              >
                Get Started!
              </button>
            </div>

            <div id="benefits-flex-container">
              <div id="benefits-box">
                <p className="benefit" id="benefit-one">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed sollicitudin diam.
                </p>
                <p className="benefit" id="benefit-two">
                  Etiam in accumsan felis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p className="benefit" id="benefit-three">
                  Aenean accumsan, enim sed gravida facilisis, turpis sem
                  ullamcorper tellus,
                </p>
              </div>

              <div id="benefit-radio-container">
                <input
                  type="radio"
                  name="slide"
                  value="benefit-one"
                  className="benefit-radio-boxes"
                  id="benefit-radio-box-one"
                  disabled
                />
                <input
                  type="radio"
                  name="slide"
                  value="benefit-two"
                  className="benefit-radio-boxes"
                  id="benefit-radio-box-two"
                  disabled
                />

                <input
                  type="radio"
                  name="slide"
                  value="benefit-three"
                  className="benefit-radio-boxes"
                  id="benefit-radio-box-three"
                  disabled
                />
              </div>

              <button className="benefit-slider-buttons" id="previous">
                {" "}
                prev{" "}
              </button>
              <button className="benefit-slider-buttons" id="next">
                {" "}
                next{" "}
              </button>
            </div>
          </section>

          <div className="modal" id="choose-a-template-modal">
            <div id="choose-a-template-modal-header">
              <button
                data-close-button
                className="close-button"
                id="choose-a-template-close-button"
              >
                &times;
              </button>
            </div>
            <div id="choose-a-template-title">Choose a template:</div>
            <div id="choose-a-template-modal-body">
              <Link to="resume">
                <button className="resume-choice-buttons" id="sample-button">
                  Sample
                </button>
              </Link>
              <Link to="resume">
                <button className="resume-choice-buttons" id="custom-button">
                  Custom
                </button>
              </Link>
            </div>
          </div>

          <section>
            <h1 id="how-to-use">How To Use:</h1>
            <div id="steps-flex-box">
              <p className="steps" id="step-one">
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eu leo bibendum, sagittis est ut, varius dui.
              </p>

              <p className="steps" id="step-two">
                2. Ut facilisis mauris quis lacus condimentum, eget rutrum est
                congue.
              </p>

              <p className="steps" id="step-three">
                3. Sed lobortis quam ac tortor lobortis, vel convallis eros
                ultricies. In eu augue diam.
              </p>
            </div>
          </section>
          <section id="statistics">
            <p id="statistic-one">
              {" "}
              <span className="number"> 69 + </span> <br></br> Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.{" "}
            </p>
            <p id="statistic-two">
              {" "}
              <span className="number"> 43 </span> <br></br> Maecenas magna
              enim, dignissim id dolor sed, tempor pellentesque nunc.
            </p>
            <p id="statistic-three">
              {" "}
              <span className="number"> 657 </span> <br></br> Mauris cursus
              egestas porttitor.{" "}
            </p>
            <p id="statistic-four">
              {" "}
              <span className="number"> 435 </span> <br></br> Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </section>
        </main>
        <footer id="information">
          <i className="fa-brands fa-discord fa-2xl"></i>
          <i className="fa-brands fa-github fa-2xl"></i>
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </footer>
        <div id="overlay"></div>
      </div>
      ;
    </>
  );
}
