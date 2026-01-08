export function ChooseATemplateModal() {
  return (
    <>
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
        <a href="resumePage.html">
          <button className="resume-choice-buttons" id="sample-button">
            Sample
          </button>
        </a>
        <a href="resumePage.html">
          <button className="resume-choice-buttons" id="custom-button">
            Custom
          </button>
        </a>
      </div>
    </>
  );
}
