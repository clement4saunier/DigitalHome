import type { Component } from "solid-js";
import Home from "./components/pages/Home";
import styles from "./App.module.css";
import { ThemeProvider } from "./components/context/ThemeProvider";

const App: Component = () => {
  return (
    <>
      <ThemeProvider>
        <div className={styles.noise}></div>
        <div className={styles.App}>
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
