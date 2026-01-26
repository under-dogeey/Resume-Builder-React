import { EditCursor } from "./EditCursor";
import { useState } from "react";
export function EditableSection({
  as: Tag = "div",
  value,
  id = "",
  active = false,
  onActivate,
}) {
  const [isHover, setHover] = useState(false);
  return (
    <Tag
      contentEditable="false"
      className={`section ${active ? "highlight-element" : ""}`}
      id={id}
      onClick={onActivate}
    >
      {value}
      {isHover && !active && <EditCursor />}
    </Tag>
  );
}
