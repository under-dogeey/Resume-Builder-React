export function Address({ setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="address"
        className={`single-line-item ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        1111 Fake Court, Fake City, FA 11111
      </div>
    </>
  );
}
