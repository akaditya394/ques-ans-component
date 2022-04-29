import React from "react";
import styles from "./Answer.module.css";

import Reply from "../Reply/Reply";

function Answer(props) {


  return (
    <div className={styles.main}>
      <div>{props.answers.length > 0 ? <b>Answers</b> : <b>No answers</b>}</div>
      <div className={styles.answers}>
        {props.answers.map((answer) => (
          <div key={answer.id} className={styles.answer}>
            <div className={styles.details}>
              <div>
                <b>Answered by : {answer.name}</b>
              </div>
              <div>
                <i>
                  <b>On : </b>
                  {answer.date}
                </i>
              </div>
            </div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: answer.content }}
            ></div>
              {answer.replies ?
                answer.replies.map((reply) => (
                  <Reply key={reply.id} name={reply.name} content={reply.content} date={reply.date} />
                )): null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Answer;
