export function Location({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        className={`location ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        Fake City, FA
      </div>
    </>
  );
}
