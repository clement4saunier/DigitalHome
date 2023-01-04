import type { Component } from "solid-js";
import Footer from "./Footer";

const Page: Component = ({ children }) => (
  <div className="page">
    <div>{children}</div>
    <Footer />
  </div>
);

export default Page;
