import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav Items
 *
 * body
 *  -Search
 *  -RestaurantConatiner
 *      -RestaurantCard
 *        -image
 *        -name
 *        -rating
 *        -cuisine
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log("props :", props);

  // destructuring the props
  // const RestaurantCard = ({ resName, cuisine }) => {
  // { resName, cuisine } = it is doing sth like this eg destrucuting like this - $ const { resName, cuisine } = props;
  // $ const { resName, cuisine } = props; this is not react doing anything. but just a js eg destructuring
  // console.log("🚀 ~ RestaurantCard ~ resName:", resName);

  // const { resData } = props;
  // console.log("🚀 ~ //RestaurantCard ~ resData:", resData);

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/tscwxqko4pabme8gj2ty"
      />
      <h3>{props.resName}</h3>
      {/* <h3>{resData.data.name}</h3> */}
      <h4>{props.cuisine}</h4>
      {/* <h3>{resName}</h3> */}
      {/* <h4>{cuisine}</h4> */}
      {/* <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4> */}
      <h4>4.4 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

// how we pass data coming from backend
// the data coming form backend will be in the form of json let is called resObj
const resObj = {
  // many data here
  data: {
    resName: "Meghna Foods",
    cuisine: "Biryani, North Indian, Asian",
    rating: 4.3,
    opened: true,
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          // passing props to the component
          resName="Meghna Foods"
          cuisine="Biryani, North Indian, Asian"
          // related to data coming from backend
          // passin this resObj object directly over here
          // note = not passing it in "" above. coz it is not a string. we have to pass it as js object
          // basically resData is a prop and resObj is the argument, the object, the real data which we are passing.
          // resData={resObj}
          // how the above will work in RestaurantCard
          // const RestaurantCard = (props) => {
          // const {resData} = props
          // c.log(resData)
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
