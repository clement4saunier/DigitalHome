import type { Component } from "solid-js";
import styles from './Tag.module.css';
import Tag from './Tag';

const Tags: Component = ({values}) => (
    <div style={{display: "flex", gap: "var(--space-m)"}}>
  {values?.map((v) => <Tag>{v}</Tag>)}
    </div>
);

export default Tags;
