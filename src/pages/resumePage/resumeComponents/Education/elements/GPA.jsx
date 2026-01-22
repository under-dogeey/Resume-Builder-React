export function GPA({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="gpa"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        GPA: 0.1/4.0
      </div>
    </>
  );
}
