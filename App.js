import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return <h1 className="one">Namaste React from Functional component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
