import { EditCursor } from "./EditCursor";
import { useState } from "react";
export function EditableSection({
  as: Tag = "div",
  id,
  html,
  active = false,
  onActivate,
}) {
  const [isHover, setHover] = useState(false);
  return (
    <div
      id={id}
      className={`section ${active ? "highlight-section" : ""}`}
      onClick={onActivate}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Tag contentEditable="false" dangerouslySetInnerHTML={{ __html: html }} />

      {isHover && !active && <EditCursor />}
    </div>
  );
}
