export function TimePeriod({ timePeriod, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        className={`time-period ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {timePeriod}
      </div>
    </>
  );
}
