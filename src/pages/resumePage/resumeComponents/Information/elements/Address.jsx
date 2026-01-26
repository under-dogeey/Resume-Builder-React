export function Address({ address, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        id="address"
        className={`single-line-item ${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {address}
      </div>
    </>
  );
}
