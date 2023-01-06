import type { Component } from "solid-js";
import styles from "./Tag.module.css";
import Tag from "./Tag";

const Tags: Component = ({ values }) => (
  <div className={styles.tags}>
    {values?.map((v) => (
      <Tag>{v}</Tag>
    ))}
  </div>
);

export default Tags;
