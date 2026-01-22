export function ProjectDetails({ setActiveElement, active }) {
  return (
    <>
      <ul
        contenteditable="false"
        className={`project-details ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
    </>
  );
}
