import React from "react";
import styles from "../../styles/Auth.module.scss";
import Button from "@/ui/button";
import Link from "next/link";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.inputs}>
        <input type="email" placeholder="your email" autoComplete="off" />
        <input type="password" placeholder="pass" />
      </div>

      <div className={styles.controllers}>
        <Button className={styles.button} text={"log in"} />

        <div className={styles.right}>
          <span>Don't have an account? </span>
          <Link className={styles.register} href={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
