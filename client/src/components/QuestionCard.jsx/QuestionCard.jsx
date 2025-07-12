import React from "react";
import styles from "./QuestionCard.module.css";
import { Link } from "react-router-dom";

const QuestionCard = ({ question }) => (
  <Link to={`/question/${question.id}`} className={styles.link}>
    <div className={styles.card}>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>{question.title}</h2>
          <p className={styles.description}>
            {question.description.substring(0, 120)}...
          </p>
        </div>
        <div className={styles.meta}>
          <div className={styles.answers}>{question.answers} ans</div>
          <div className={styles.user}>{question.user}</div>
        </div>
      </div>
    </div>
  </Link>
);

export default QuestionCard;
