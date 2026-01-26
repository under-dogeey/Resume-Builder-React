export function ProjectDetails({ projectDetails, setActiveElement, active }) {
  return (
    <>
      <ul
        contenteditable="false"
        className={`project-details ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
        dangerouslySetInnerHTML={{ __html: projectDetails }}
      ></ul>
    </>
  );
}
