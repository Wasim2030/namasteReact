import React from "react";
import ReactDOM from "react-dom/client";

//creating using core react
// const heading1 = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log('heading1 :', heading1);
// ******************************************************************************
// jsx
// creating h1 tag using jsx
// const jsxHeading = <h1 id="heading">Namaste React Using JSx</h1>;
// console.log("🚀 ~ jsxHeading:", jsxHeading);

// for multiple line - use () - so that balbel can understand where it starts and end.
// This (heading) is a react element. And react element is an object. eg normal js const variable. and this varibale contains an object.
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSx
  </h1>
);

// ******************************************************************************
// react component
// functional and class based component

// react functional comp - it is a normal js function which return  jsx or a react element.
// check Elements console = this className is converted to class
// hWorld => to => hworld  but chck console. it throws an error
const HeadingComponent = () => {
  return (
    // <h1 className="one" hWorld="two">
    <h1 className="one">Namaste React from Functional component</h1>
  );
};

// ******************************************************************************
// above code in short cut
// const HeadingComponent = () => <h1>Namaste React from Shortcut component</h1>;

// ******************************************************************************
// if in multiple line = use ()
// const HeadingComponent = () => (
//   <h1 className="heading">Namaste React from Shortcut component</h1>
// );

// ******************************************************************************
// // my notes
// const HeadingComponent = () => {
//   const heading = (
//     <h1 className="head" tabIndex="5">
//       Namaste React Using JSx
//     </h1>
//   );
//   return heading;
// };

// ******************************************************************************
// render part
const root = ReactDOM.createRoot(document.getElementById("root"));
// this is the way of rendering the react element
// root.render(heading);

// This is the way to render the react functional component
root.render(<HeadingComponent />);

// ******************************************************************************
// note
// arrow function. for one liner - can skip return keyword and also {}
// const fn = () => console.log("hello");
// fn();

// ******************************************************************************
// what is component composition = component inside component

const Title = () => <h1>Namaste react from title</h1>;

// component inside component
const Headcomponent = () => (
  <div>
    <Title />
    <h1>Namaste react from Headcomponent</h1>
  </div>
);

// ******************************************************************************

// part 5
// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     Namaste React Using JSx
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="head">Namaste React Functional Component</h1>
//   </div>
// );

// ******************************************************************************
// // how to put this Title (react element) inside my HeadingComponent (component)
// // This Title is a normal js variable. So put it inside {} and everything inside Title will come inside {}
// const Title = (
//   <h1 className="head" tabIndex="5">
//     Namaste React Using JSx
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {Title}

//     {100 + 10}

//     <h1>{console.log("heeeellllo")}</h1>

//     <h1>{500 + 9}</h1>

//     <h1 className="head">Namaste React Functional Component</h1>
//   </div>
// );

// ******************************************************************************

// const elem = <span>React Elem....... </span>;

// const Title = (
//   <h1 className="head" tabIndex="5">
//     {elem}
//     Namaste React Using JSx
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {Title}

//     {100 + 10}

//     <h1>{console.log("heeeellllo")}</h1>

//     <h1>{500 + 9}</h1>

//     <h1 className="head">Namaste React Functional Component</h1>
//   </div>
// );

// ***********************************************************************************

// const Title = (
//   <h1 className="head" tabIndex="5">
//     Namaste React Using JSx
//   </h1>
// );

// const data = 1000;
// // assume above data as it is coming from an api eg - const data = api.getData()
// // what if this api sends some malicious data as we are injecting this data in {} in jsx of HeadingComponent fn
// // as it will get executed as js will run that piece of code
// // this type of attact is known as cross-site scripting
// // jsx takes care of these attack

// const HeadingComponent = () => (
//   <div id="container">
//     {data}
//     {Title}
//     <h1 className="head">Namaste React Functional Component</h1>
//   </div>
// );

// ***************************************************************************************

// can i call a function inside other function

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     Namaste React Using JSx
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {/* we can call the function... it works eg {Title()} */}
//     {Title()}
//     {/* this is another way of executing in jsx */}
//     <Title />

//     <p>*******************************</p>

//     {/* These three things are the same thing */}
//     {Title()}
//     <Title />
//     <Title></Title>

//     <p>*******************************</p>

//     <h1 className="head">Namaste React Functional Component</h1>
//   </div>
// );

// ******************************************************************************
// render
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
