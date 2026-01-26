export function ExperienceName({ experienceName, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        className={`experience-name ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {experienceName}
      </div>
    </>
  );
}
