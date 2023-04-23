import React from "react";
import styles from "../../styles/Auth.module.scss";

interface Props {
  form: any;
}

const MainContainer: React.FC<Props> = ({ form }) => {
  return (
    <div className={styles.main}>
      <div className={styles.background}>
        <img src="/fashion.jpg" alt="fashion" />
      </div>
      <div className={styles.formContainer}>
        <h1>Welcome Back!</h1>
        <div className={styles.formCard}>{form}</div>
      </div>
    </div>
  );
};

export default MainContainer;
