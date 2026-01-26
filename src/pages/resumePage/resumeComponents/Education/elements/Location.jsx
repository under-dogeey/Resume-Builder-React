export function Location({ location, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        className={`location ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {location}
      </div>
    </>
  );
}
