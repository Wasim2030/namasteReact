const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm a h1 tag")
  )
);
console.log("🚀 ~ parent:", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
 
// it puts parent inside the root tag
// it will replace anything which is inside the div tag
root.render(parent);

// note = react element is an object at the end of the day.

