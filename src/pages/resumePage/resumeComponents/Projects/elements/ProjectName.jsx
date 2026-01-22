export function ProjectName({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        className={`project-name ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        Fake Project
      </div>
    </>
  );
}
