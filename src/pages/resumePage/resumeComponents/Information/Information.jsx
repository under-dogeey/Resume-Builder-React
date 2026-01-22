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
}) {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div
        className={`section special ${
          isSectionActive ? "highlight-section" : ""
        }`}
        id="information"
        onClick={setActiveSection}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Address
          setActiveElement={() => {
            isSectionActive ? setActiveElement("address") : null;
          }}
          active={activeElement === "address"}
        ></Address>
        <PhoneNumber
          setActiveElement={() => {
            isSectionActive ? setActiveElement("phone-number") : null;
          }}
          active={activeElement === "phone-number"}
        ></PhoneNumber>
        <Email
          setActiveElement={() => {
            isSectionActive ? setActiveElement("projects") : null;
          }}
          active={activeElement === "projects"}
        ></Email>

        {isHover && !isSectionActive && <EditCursor />}
      </div>
    </>
  );
}
