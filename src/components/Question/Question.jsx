import React from "react";
import styles from "./Question.module.css";

function Question(props) {
  return (
    <div className={styles.main}>
      <div className={styles.details}>
        <div>
          <b>{props.name}</b>
        </div>
        <div>
          <i>{props.date}</i>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: `<b>Q.${props.question}</b>` }}
        className={styles.question}
      ></div>
      <div
        dangerouslySetInnerHTML={{ __html: `<i>${props.desc}</i>` }}
        className={styles.description}
      ></div>
      <div className={styles.stats}>
        <div>
          <b>Upvotes : </b>
          {props.upvotes.length}
        </div>
        <div>
          <b>Answers : </b>
          {props.answers.length}
        </div>
      </div>
    </div>
  );
}

export default Question;
