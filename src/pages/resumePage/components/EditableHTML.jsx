export function EditableHTML({
  as: Tag = "ul",
  html,
  className = "",
  active = false,
  onActivate,
}) {
  return (
    <Tag
      contentEditable="false"
      className={`${className} ${active ? "highlight-element" : ""}`}
      onClick={onActivate}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
