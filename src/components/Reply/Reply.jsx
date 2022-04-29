import React from "react";
import styles from "./Reply.module.css";

function Reply(props) {
  return (
    <div className={styles.main}>
      <b>Reply By</b>
      <div className={styles.details}>
        <b>{props.name}</b>
        <div>
          {" "}
          <i>
            <b>On : </b> {props.date}
          </i>
        </div>
      </div>
      <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
    </div>
  );
}

export default Reply;
