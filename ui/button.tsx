import React from "react";
import styles from "../styles/Ui.module.scss";
import clsx from "clsx";

interface Props {
  text: string;
  onClick?(): void;
  outlined?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({
  text,
  onClick,
  outlined,
  className,
  type,
}) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, className, outlined && styles.outlined)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
