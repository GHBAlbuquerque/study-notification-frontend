import React from "react";
import styles from "./styles.module.css";

type DefaultTextAreaProps = {
  labelText?: string;
} & React.ComponentProps<'textarea'>;


export default function DefaultTextArea({...props}: DefaultTextAreaProps) {
  return <textarea className={styles.textarea} {...props} />;
}