export function GPA({ gpa, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="gpa"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {gpa}
      </div>
    </>
  );
}
