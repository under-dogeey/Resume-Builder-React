import { EditCursor } from "../../components/EditCursor";
import { EditableElement } from "../../components/EditableElement";
import { useState } from "react";

export function Information({
  setActiveSection,
  isSectionActive,
  setActiveElement,
  activeElement,
  setActiveTextEditor,
  setTextContent,
}) {
  const [address, setAddress] = useState(
    "1111 Fake Court, Fake City, FA 11111",
  );
  const [phoneNumber, setPhoneNumber] = useState("(111) 111-1111");
  const [email, setEmail] = useState("fakefakefake@gmail.com");

  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        className={`section special ${
          isSectionActive ? "highlight-section" : ""
        }`}
        id="information"
        onClick={(event) => {
          setActiveSection();
          if (event.target !== event.currentTarget) {
            return;
          } else {
            setActiveTextEditor(false);
            setActiveElement("");
          }
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <EditableElement
          className="address"
          html={address}
          active={activeElement === "address"}
          onActivate={() => {
            if (isSectionActive) {
              setActiveElement("address");
              setActiveTextEditor(true);
              setTextContent(address);
            }
          }}
        />

        <EditableElement
          className="phone-number"
          html={phoneNumber}
          active={activeElement === "phone-number"}
          onActivate={() => {
            if (isSectionActive) {
              setActiveElement("phone-number");
              setActiveTextEditor(true);
              setTextContent(phoneNumber);
            }
          }}
        />

        <EditableElement
          className="email"
          html={email}
          active={activeElement === "email"}
          onActivate={() => {
            if (isSectionActive) {
              setActiveElement("email");
              setActiveTextEditor(true);
              setTextContent(email);
            }
          }}
        />

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
