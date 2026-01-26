export function Degree({ degree, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="degree"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {degree}
      </div>
    </>
  );
}
