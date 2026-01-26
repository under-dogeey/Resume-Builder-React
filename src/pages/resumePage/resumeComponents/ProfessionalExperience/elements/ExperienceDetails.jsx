export function ExperienceDetails({
  experienceDetails,
  setActiveElement,
  active,
}) {
  return (
    <>
      <ul
        contenteditable="false"
        className={`experience-details ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
        dangerouslySetInnerHTML={{ __html: experienceDetails }}
      ></ul>
    </>
  );
}
