export function EditableElement({
  as: Tag = "div",
  value,
  className = "",
  active = false,
  onActivate,
}) {
  return (
    <Tag
      contentEditable="false"
      className={`${className} ${active ? "highlight-element" : ""}`}
      onClick={onActivate}
    >
      {value}
    </Tag>
  );
}
