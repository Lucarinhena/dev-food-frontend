import styles from "./styles.module.scss";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: InputProps) {
  return <input className={styles.input} {...rest} />;
}

export function textArea({ ...rest }: TextAreaProps) {
  return <textarea className={styles.input} {...rest}></textarea>;
}
