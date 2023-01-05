import type { Component } from "solid-js";
import Footer from "./Footer";

const Page: Component = ({ children, header}) => (
  <div className="page">
    {header}
    <div>{children}</div>
    <Footer />
  </div>
);

export default Page;
