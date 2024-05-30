import React from "react";
import ReactDom from "react-dom";
import App from "./App";
// Mount function to start the up
const mount = (el) => {
  ReactDom.render(<App />, el);
};

// if we are in development and in isolation
// Call Mount Immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#__marketing-dev-root");
  if (devRoot) mount(devRoot);
}

// we are running throug container
// and we should export mount function
export { mount };
