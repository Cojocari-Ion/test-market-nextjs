import React, { useCallback, useState } from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  console.log(router.pathname);

  const [hidden, setHidden] = useState<boolean>(false);

  const handleHidden = useCallback(() => {
    if (router.pathname === "/login" || router.pathname === "/register") {
      setHidden(true);
    }
  }, [router.pathname]);

  return hidden ? (
    <></>
  ) : (
    <>
      <div className={styles.nav}>
        <div className={styles.navBrand}>
          <h2>.brand</h2>
        </div>

        <div className={styles.navbarMenu}>
          <div className={styles.navItem}>
            <Link href={"/"}>home</Link>
          </div>

          <div className={styles.navItem}>
            <Link href={"/about"}>about</Link>
          </div>

          <div className={styles.navItem}>
            <Link href={"/cart"}>cart</Link>
          </div>

          <div onClick={handleHidden} className={styles.navItem}>
            <Link href={"/login"}>log in</Link>
          </div>

          <div onClick={handleHidden} className={styles.navItem}>
            <Link href={"/register"}>register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
