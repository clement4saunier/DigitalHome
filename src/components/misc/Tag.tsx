import type { Component } from "solid-js";
import styles from './Tag.module.css';

const colors = {
    "Javascript": {background: "#fae047", color: "#353232"},
    "Typescript": {background: "#007bc8", color: "white"},
    "React.js": {background: "#222222", color: "#00d9fc"},
    "React Native": {background: "#00d9fc   ", color: "#222222"},
    "Next.js": {background: "white", color: "black"},
    "Unity": {background: "black", color: "white"},
    "Solid.js": {background: "#22508a", color: "#b0d5ed"},
    "C": {background: "#005899", color: "white"},
    "C#": {background: "#762881", color: "white"},
    "C++": {background: "#005999", color: "white"},
    "Solidity": {background: "#1c1c1c", color: "#c9c9c9"},
    "Ipfs": {background: "#399293", color: "white"},
    "Python": {background: "#266c97", color: "#ffda62"},
    "Haskell": {background: "#914f89", color: "white"},
}

const Tag: Component = ({children}) => (
  <i className={styles.tag} style={colors[children]}>
    {children}
  </i>
);

export default Tag;
