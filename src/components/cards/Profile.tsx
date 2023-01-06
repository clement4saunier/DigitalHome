import type { Component } from "solid-js";
import styles from "./Profile.module.css";
import avatar from "../../assets/avatar.png";

const Profile: Component = ({ children, footer, ...props }) => (
  <div className={["card", styles.layout].join(" ")} {...props}>
    <img alt="profile pic" src={avatar}></img>
    <div className={styles.content}>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  </div>
);

export default Profile;
