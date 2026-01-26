import { TextStyleKit } from "@tiptap/extension-text-style";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { useEffect } from "react";
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Link from "@tiptap/extension-link";
import { TextStyle } from "@tiptap/extension-text-style";
import { FontFamily } from "@tiptap/extension-font-family";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faStrikethrough,
  faUnderline,
  faLink,
  faSubscript,
  faSuperscript,
  faListUl,
  faListOl,
  faUndo,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { FontSize } from "./Extensions/FontSize";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import "./TextEditor.css";

const extensions = [
  TextStyleKit,
  StarterKit,
  Underline,
  Link.configure({
    openOnClick: false,
    autolink: true,
  }),
  Subscript,
  Superscript,
  TextStyle,
  FontFamily,
  FontSize,
  Color,
  Highlight.configure({ multicolor: true }),
];

function MenuBar({ editor }) {
  // Read the current editor's state, and re-render the component when it changes
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
        isUnderline: ctx.editor.isActive("underline") ?? false,
        canUnderline: ctx.editor.can().chain().toggleUnderline().run() ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
        isSubscript: ctx.editor.isActive("subscript") ?? false,
        canSubscript: ctx.editor.can().chain().toggleSubscript().run() ?? false,
        isSuperscript: ctx.editor.isActive("superscript") ?? false,
        canSuperscript:
          ctx.editor.can().chain().toggleSuperscript().run() ?? false,
        isLink: ctx.editor.isActive("link") ?? false,
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false,
        fontFamily: ctx.editor.getAttributes("textStyle").fontFamily || "",
        fontSize: ctx.editor.getAttributes("textStyle").fontSize || "",
        color: ctx.editor.getAttributes("textStyle").color || "#000000",
        highlight: ctx.editor.getAttributes("highlight").color || "",
      };
    },
  });

  return (
    <div className="control-group">
      <div className="menu-bar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          className={editorState.isBold ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editorState.canItalic}
          className={editorState.isItalic ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editorState.canStrike}
          className={editorState.isStrike ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editorState.canUnderline}
          className={editorState.isUnderline ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faUnderline} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          disabled={!editorState.canSubscript}
          className={editorState.isSubscript ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faSubscript} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          disabled={!editorState.canSuperscript}
          className={editorState.isSuperscript ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faSuperscript} />
        </button>

        <button
          onClick={() => {
            const url = window.prompt("Enter URL");

            if (!url) {
              editor.chain().focus().unsetLink().run();
              return;
            }

            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url })
              .run();
          }}
          className={editorState.isLink ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faLink} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editorState.isBulletList ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faListUl} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editorState.isOrderedList ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faListOl} />
        </button>

        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editorState.canUndo}
        >
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editorState.canRedo}
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>

        <select
          onChange={(e) =>
            editor.chain().focus().setFontFamily(e.target.value).run()
          }
          value={editorState.fontFamily}
        >
          <option value="">Default</option>
          <option value="Inter">Inter</option>
          <option value="Georgia">Georgia</option>
          <option value="monospace">Monospace</option>
        </select>

        <select
          onChange={(e) =>
            editor.chain().focus().setFontSize(e.target.value).run()
          }
          value={editorState.fontSize}
        >
          <option value="">Default</option>
          <option value="12px">12</option>
          <option value="14px">14</option>
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="24px">24</option>
        </select>

        <input
          type="color"
          id="fontColor"
          value={editorState.color || "#000000"}
          onChange={(e) =>
            editor.chain().focus().setColor(e.target.value).run()
          }
        />
        <label htmlFor="fontColor">Font Color</label>

        <input
          type="color"
          id="highlightColor"
          value={editorState.highlight || "#ffff00"}
          onChange={(e) =>
            editor
              .chain()
              .focus()
              .setMark("highlight", { color: e.target.value })
              .run()
          }
        />
        <label htmlFor="highlightColor">Highlight Color</label>
      </div>
    </div>
  );
}

export function TextEditor({ content }) {
  const editor = useEditor({
    extensions,
    content,
  });

  useEffect(() => {
    if (!editor) return;
    editor.commands.setContent(content || "", false);
  }, [editor, content]);

  return (
    <div className="text-editor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
