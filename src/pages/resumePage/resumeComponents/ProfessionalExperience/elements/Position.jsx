export function Position({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="position"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        Faker
      </div>
    </>
  );
}
