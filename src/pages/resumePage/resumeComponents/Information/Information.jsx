import { Address } from "./elements/Address";
import { PhoneNumber } from "./elements/PhoneNumber";
import { Email } from "./elements/Email";
import { EditCursor } from "../../components/EditCursor";
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
        <Address
          address={address}
          setActiveElement={() => {
            if (isSectionActive) {
              setActiveElement("address");
              setActiveTextEditor(true);
              setTextContent(address);
            }
          }}
          active={activeElement === "address"}
        ></Address>
        <PhoneNumber
          phoneNumber={phoneNumber}
          setActiveElement={() => {
            if (isSectionActive) {
              setActiveElement("phone-number");
              setActiveTextEditor(true);
              setTextContent(phoneNumber);
            }
          }}
          active={activeElement === "phone-number"}
        ></PhoneNumber>
        <Email
          email={email}
          setActiveElement={() => {
            if (isSectionActive) {
              setActiveElement("projects");
              setActiveTextEditor(true);
              setTextContent(email);
            }
          }}
          active={activeElement === "projects"}
        ></Email>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
