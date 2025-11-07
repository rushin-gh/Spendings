import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/head";
import Body from "./components/body";

const App = () => {
  return (
    <div id="app">
      <Head />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
