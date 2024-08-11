import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // lets use the mock data from utils
  // const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  // the above is array destructuring.useState returns an array

  const arr = useState(resList);
  // above is basically like this
  // const [listOfRestaurant, setListOfRestaurant] = arr; // this is arrray dectructuring

  // above is like
  const listOfRestaurant = arr[0];
  const setListOfRestaurant = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
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
