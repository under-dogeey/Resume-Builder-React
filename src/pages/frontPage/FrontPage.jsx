import "../../assets/theme.css";
import "./frontPage.css";
import { Link } from "react-router";
import { Header } from "../../assets/components/Header";
import { DisclaimerModal } from "./components/DisclaimerModal";
import { DescriptionBox } from "./components/DescriptionBox";
import { Benefits } from "./components/Benefits";
import { ChooseATemplateModal } from "./components/ChooseATemplateModal";
import { HowToUse } from "./components/HowToUse";
import { Statistics } from "./components/Statistics";

export function FrontPage() {
  return (
    <>
      <div className="font-type">
        <div className="modal" id="disclaimer-modal">
          <DisclaimerModal></DisclaimerModal>
        </div>

        <header>
          <Header></Header>
        </header>

        <main>
          <section id="hub-flex-container">
            <div id="description-box">
              <DescriptionBox></DescriptionBox>
            </div>

            <div id="benefits-flex-container">
              <Benefits></Benefits>
            </div>
          </section>

          <div className="modal" id="choose-a-template-modal">
            <ChooseATemplateModal></ChooseATemplateModal>
          </div>

          <section id="how-to-use">
            <HowToUse></HowToUse>
          </section>
          <section id="statistics">
            <Statistics></Statistics>
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
