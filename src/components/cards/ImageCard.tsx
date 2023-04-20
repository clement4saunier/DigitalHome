import type { Component } from "solid-js";
import styles from "./ImageCard.module.css";

const ImageCard: Component = ({ children, footer, src, corner }) => (
  <div class={["card", styles.layout].join(" ")}>
    <img alt="icon" src={src}></img>
    <div class={styles.content}>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
    <div class={styles.corner}>{corner}</div>
  </div>
);

export default ImageCard;
