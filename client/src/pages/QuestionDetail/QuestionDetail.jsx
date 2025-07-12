// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import questions from "../../data/questions";
// import styles from "./QuestionDetail.module.css";
// import TextEditor from "../../components/TextEditor/TextEditor";

// const QuestionDetail = () => {
//   const { id } = useParams();
//   const question = questions.find((q) => q.id === parseInt(id));

//   const [answers, setAnswers] = useState(question.answersdesc || []);

//   const handleRelate = (answerId) => {
//     setAnswers((prev) =>
//       prev.map((ans) =>
//         ans.id === answerId ? { ...ans, relates: ans.relates + 1 } : ans
//       )
//     );
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.breadcrumb}>
//         <Link to="/">Question &gt; </Link>
//         <span>{question.title.slice(0, 10)}......</span>
//       </div>

//       <div className={styles.questionCard}>
//         <h2>{question.title}</h2>
//         <p className={styles.description}>{question.description}</p>
//         <span className={styles.user}>{question.user}</span>
//         <span className={styles.time}>{new Date(question.time).toLocaleString()}</span>
//       </div>

//       <div className={styles.answersSection}>
//         <h3>{question.answers} Answers</h3>
//         {answers.map((ans) => (
//           <div key={ans.id} className={styles.answerCard}>
//             <div className={styles.relateBox}>
//               <button onClick={() => handleRelate(ans.id)}>🤝 I relate</button>
//               <span>{ans.relates}</span>
//             </div>
//             <div className={styles.answerText}>{ans.text}</div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.editorSection}>
//         <h4>Submit Your Answer</h4>
//         <TextEditor />
//         <button className={styles.submitBtn}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default QuestionDetail;
import React, { useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import questions from "../../data/questions";
import styles from "./QuestionDetail.module.css";
import TextEditor from "../../components/TextEditor/TextEditor";

const QuestionDetail = ({ isLoggedIn }) => {
  const editorRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const question = questions.find((q) => q.id === parseInt(id));
  const [answers, setAnswers] = useState(question.answersdesc || []);
  const [newAnswer, setNewAnswer] = useState("");

  const handleRelate = (answerId) => {
    setAnswers((prev) =>
      prev.map((ans) =>
        ans.id === answerId ? { ...ans, relates: ans.relates + 1 } : ans
      )
    );
  };

 const handleSubmit = () => {
  if (!isLoggedIn) {
    navigate("/login");
    return;
  }

  const content = editorRef.current?.current?.innerText || ""; // or `.innerHTML` if you want rich text

  if (content.trim() === "") return;

  const newAns = {
    id: answers.length + 1,
    text: content,
    relates: 0,
  };

  setAnswers([...answers, newAns]);
};

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to="/">Question &gt; </Link>
        <span>{question.title.slice(0, 10)}......</span>
      </div>

      <div className={styles.questionCard}>
        <h2>{question.title}</h2>
        <p className={styles.description}>{question.description}</p>
        <span className={styles.user}>{question.user}</span>
        <span className={styles.time}>
          {new Date(question.time).toLocaleString()}
        </span>
      </div>

      <div className={styles.answersSection}>
        <h3>{answers.length} Answers</h3>
        {answers.map((ans) => (
          <div key={ans.id} className={styles.answerCard}>
            <div className={styles.relateBox}>
              <button onClick={() => handleRelate(ans.id)}>🤝 I relate</button>
              <span>{ans.relates}</span>
            </div>
            <div className={styles.answerText}>{ans.text}</div>
          </div>
        ))}
      </div>

      <div className={styles.editorSection}>
        <h4>Submit Your Answer</h4>
        <TextEditor getContentRef={editorRef} />
        <button className={styles.submitBtn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionDetail;

