import React from "react";
import styles from "./Home.module.css";
import QnA from "../../components/QnA/QnA";

function Home() {
  return (
    <div className={styles.main}>
      <QnA />
    </div>
  );
}

export default Home;
