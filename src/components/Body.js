import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import listOfRestaurant from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable - super powerful variable
  // const [listOfRestaurant, setListOfRestaurant] = useState([]);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic for rating
            // console.log("clicked");
            // data is filtered (see console) but out ui didnot updated. Here comes the state variable
            listOfRestaurant = listOfRestaurant.filter((res) => {
              res.data.avgRating > 4;
            });
            console.log(listOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
