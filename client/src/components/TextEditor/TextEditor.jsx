import React, { useRef, useState } from "react";
import styles from "./TextEditor.module.css";
import { useNavigate } from "react-router-dom";
const TextEditor = ({ getContentRef }) => {
    const fileInputRef = useRef(null);
    const descriptionRef = useRef(null);
    if (getContentRef) {
    getContentRef.current = descriptionRef;
  }
    const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    strikeThrough: false,
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false,
  });
    const toggleFormat = (command) => {
    document.execCommand(command, false, null);
    setActiveFormats((prev) => ({
      ...prev,
      [command]: !prev[command],
    }));
  };


  const handleLink = () => {
    const url = prompt("Enter URL:");
    if (url) document.execCommand("createLink", false, url);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      document.execCommand("insertImage", false, e.target.result);
    };
    reader.readAsDataURL(file);
  };
    return(
        <div>
            <label>Description</label>
                  <div className={styles.toolbar}>
                    <button
                      type="button"
                      onClick={() => toggleFormat("bold")}
                      className={activeFormats.bold ? styles.activeBtn : ""}
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleFormat("italic")}
                      className={activeFormats.italic ? styles.activeBtn : ""}
                    >
                      I
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleFormat("strikeThrough")}
                      className={activeFormats.strikeThrough ? styles.activeBtn : ""}
                    >
                      S
                    </button>
                    <button type="button" onClick={() => document.execCommand("insertUnorderedList")}>•</button>
                    <button type="button" onClick={() => document.execCommand("insertOrderedList")}>1.</button>
            
                    <button
                      type="button"
                      onClick={() => toggleFormat("justifyLeft")}
                      className={activeFormats.justifyLeft ? styles.activeBtn : ""}
                    >
                      ⬅️
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleFormat("justifyCenter")}
                      className={activeFormats.justifyCenter ? styles.activeBtn : ""}
                    >
                      ↔️
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleFormat("justifyRight")}
                      className={activeFormats.justifyRight ? styles.activeBtn : ""}
                    >
                      ➡️
                    </button>
            
                    <button type="button" onClick={handleLink}>🔗</button>
                    <button type="button" onClick={() => fileInputRef.current.click()}>🖼️</button>
                    
            
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    />
                  </div>
            
                  <div
                    ref={descriptionRef}
                    className={styles.editor}
                    contentEditable
                    placeholder="Write here..."
                  ></div>
        </div>
    )
}
export default TextEditor
