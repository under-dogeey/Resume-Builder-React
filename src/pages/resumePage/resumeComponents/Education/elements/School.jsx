export function School({ school, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="school"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {school}
      </div>
    </>
  );
}
