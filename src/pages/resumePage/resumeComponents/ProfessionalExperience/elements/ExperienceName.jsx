export function ExperienceName({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        className={`experience-name ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        Fake Club
      </div>
    </>
  );
}
