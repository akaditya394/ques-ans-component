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
      setQnas(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchQnA();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.qna}>
        {qnas.map((qna, index) => {
          return (
            <React.Fragment key={index}>
              <Question
                key={qna.author}
                question={qna.question}
                answers={qna.answers}
                upvotes={qna.upvotes}
                name={qna.name}
                desc={qna.desc}
                date={qna.date}
              />
              <Answer
                id={qna.uid}
                name={qna.name}
                key={qna.uid}
                answers={qna.answers}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default QnA;
