export function Position({ position, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="position"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {position}
      </div>
    </>
  );
}
