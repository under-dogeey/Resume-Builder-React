export function DisclaimerModal() {
  return (
    <>
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
    </>
  );
}
