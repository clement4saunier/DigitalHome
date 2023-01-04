import type { Component } from "solid-js";
import styles from "./ImageCard.module.css";

const ImageCard: Component = ({ children, footer, src }) => (
  <div className={["card", styles.layout].join(" ")}>
    <img alt="icon" src={src}></img>
    <div className={styles.content}>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  </div>
);

export default ImageCard;
