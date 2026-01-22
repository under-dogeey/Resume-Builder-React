export function Email({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        class="single-line-item"
        id="phone-number"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        (111) 111-1111
      </div>
    </>
  );
}
