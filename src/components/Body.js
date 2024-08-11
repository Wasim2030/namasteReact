import RestaurantCard from "./RestaurantCard";
import listOfRestaurant from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // const [listOfRestaurant, setListOfRestaurant] = useState([]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurant = listOfRestaurant.filter((res) => {
              res.data.avgRating > 4;
            });
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
