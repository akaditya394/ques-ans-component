import React, { useState, useEffect } from "react";
import styles from "./QnA.module.css";

import Question from "../Question/Question";
import Answer from "../Answer/Answer";

function QnA() {
  const [qnas, setQnas] = useState([]);

  async function fetchQnA() {
    try {
      const response = await fetch(
        "https://recruitingmonk-v2.azurewebsites.net/qna"
      );
      const data = await response.json();
      console.log(data);
      setQnas(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchQnA();
  }, []);

  return (
    <div className={styles.main}>
      {qnas.map((qna) => {
        return (
          <div className={styles.qna}>
            <Question
              question={qna.question}
              answers={qna.answers}
              upvotes={qna.upvotes}
              name={qna.name}
              desc={qna.desc}
              date={qna.date}
            />
            <Answer answers={qna.answers} />
          </div>
        );
      })}
    </div>
  );
}

export default QnA;
