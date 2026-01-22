export function Degree({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="degree"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        B.S, Fake Major
      </div>
    </>
  );
}
