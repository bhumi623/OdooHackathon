import React, { useRef, useState } from "react";
import styles from "./PostForm.module.css";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const navigate = useNavigate();
  const descriptionRef = useRef(null);

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const fileInputRef = useRef(null);

  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    strikeThrough: false,
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = descriptionRef.current.innerHTML.trim();

    if (!title || !description || tags.length === 0) {
      alert("All fields are required!");
      return;
    }

    console.log({ title, description, tags });
    alert("Post Submitted");
    navigate("/");
  };

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

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <h2>Create a Post</h2>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your headline..."
        required
      />

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
        placeholder="Write your post here..."
      ></div>

      <label>Tags</label>
      <div className={styles.tagInputContainer}>
        <input
          type="text"
          placeholder="Type tag and press Enter"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
        />
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag} <button onClick={() => removeTag(tag)}>×</button>
            </span>
          ))}
        </div>
      </div>

      <button type="submit">Publish</button>
    </form>
  );
};

export default PostForm;
