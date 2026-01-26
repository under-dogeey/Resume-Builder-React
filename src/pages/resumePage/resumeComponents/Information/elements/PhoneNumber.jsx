export function PhoneNumber({ phoneNumber, setActiveElement, active }) {
  return (
    <>
      <div
        contenteditable="false"
        class="single-line-item"
        id="email"
        className={`${active ? "highlight-element" : ""}`}
        onClick={setActiveElement}
      >
        {phoneNumber}
      </div>
    </>
  );
}
