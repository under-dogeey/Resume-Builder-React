export function School({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="school"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        Fake State University
      </div>
    </>
  );
}
