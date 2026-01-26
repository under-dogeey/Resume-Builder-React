export function ProjectName({ projectName, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        className={`project-name ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {projectName}
      </div>
    </>
  );
}
