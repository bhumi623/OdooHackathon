import React, { useState } from "react";
import styles from "./PostForm.module.css";
import { useNavigate } from "react-router-dom";
import TextEditor from "../../components/TextEditor/TextEditor.jsx";
import questions from "../../data/questions.js";

const PostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const editor = document.querySelector("[contenteditable]");
    const description = editor?.innerHTML.trim();

    if (!title || !description || tags.length === 0) {
      alert("All fields are required!");
      return;
    }

    const newQuestion = {
      id: questions.length + 1,
      title,
      description,
      user: "Anonymous",
      time: new Date().toISOString(),
      tags,
      answers: 0,
      answersdesc: []
    };

    questions.unshift(newQuestion); // Prepend the new question
    alert("Post Submitted");
    navigate("/");
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

      <TextEditor />

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
