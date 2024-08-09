// this imported react referss to the react from node modules
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "Hey its wasim akhter"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);
// console.log("🚀 ~ parent:", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// it puts parent inside the root tag
// it will replace anything which is inside the div tag
root.render(parent);

// note = react element is an object at the end of the day.
