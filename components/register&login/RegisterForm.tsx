import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/Auth.module.scss";
import Button from "@/ui/button";
import Link from "next/link";
import axios from "axios";

type Props = {};

const RegisterForm = (props: Props) => {
  const [createdUser, setCreatedUser] = useState<any>({
    email: "",
    name: "",
    surname: "",
    password: "",
  });

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        // data: {
        email: createdUser.email,
        name: createdUser.name,
        surname: createdUser.surname,
        password: createdUser.password,
        // },
      });
    } catch (error) {
      console.log(error);
    }
  }, [createdUser]);

  return (
    <div className={styles.registerForm}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
        className={styles.inputs}
        action="register"
      >
        <input
          onChange={(e: any) => {
            setCreatedUser({ ...createdUser, name: e.target.value });
          }}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="name"
          required={true}
        />
        <input
          onChange={(e: any) => {
            setCreatedUser({ ...createdUser, surname: e.target.value });
          }}
          type="text"
          name="surname"
          autoComplete="off"
          placeholder="surname"
          required={true}
        />
        <input
          onChange={(e: any) => {
            setCreatedUser({ ...createdUser, email: e.target.value });
          }}
          type="email"
          placeholder="your email"
          autoComplete="off"
          required={true}
        />

        <input
          onChange={(e: any) => {
            setCreatedUser({ ...createdUser, password: e.target.value });
          }}
          type="password"
          placeholder="pass"
          required={true}
        />

        <div className={styles.controllers}>
          <Button type={"submit"} className={styles.button} text={"log in"} />

          <div className={styles.right}>
            <span>Allready have an account? </span>
            <Link className={styles.register} href={"/login"}>
              Log in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
