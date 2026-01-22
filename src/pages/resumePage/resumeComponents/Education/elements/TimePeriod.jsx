export function TimePeriod({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        className={`time-period ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        Month 2069-Present
      </div>
    </>
  );
}
