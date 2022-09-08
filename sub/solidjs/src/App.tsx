import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import Count from "./pages/Count";
import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <Routes>
        <Route path="/solidjs/" component={Count}/>
      </Routes>
      </header>

    </div>
  );
};

export default App;
