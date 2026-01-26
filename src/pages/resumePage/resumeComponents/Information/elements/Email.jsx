export function Email({ email, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        class="single-line-item"
        id="phone-number"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {email}
      </div>
    </>
  );
}
