import RestaurantCard from "./RestaurantCard";
// import listOfRestaurant from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // as soon as listOfRestaurant changes (on click event) => it will automatically refreshes my component. This is known as render
  // whenever a state variable updates/changes , react rerenders the component.
  // open Elements console and see the div with classe res-card before and after clicking on the button
  const [listOfRestaurant, setListOfRestaurant] = useState([
    {
      data: {
        id: "255655",
        name: "Cake & Cream",
        cloudinaryImageId: "ac57cc371e73f96f812613f58457aca3",
        areaName: "Jairaj Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Hot-dog", "pastery", "Cake", "Thick- shake"],
        avgRating: 4.3,
        veg: true,
        parentId: "54670",
        avgRatingString: "4",
        totalRatingsString: "20+",
      },
    },
    {
      data: {
        id: "350363",
        name: "Haldiram's Sweets and Namkeen",
        cloudinaryImageId: "25c3a7d394d6c5556b134385f7d665b0",
        avgRating: 3.6,
        veg: true,
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Pizzas",
          "Fast Food",
        ],
        parentId: "391465",
        avgRatingString: "4.6",
        totalRatingsString: "100+",
      },
    },
    {
      data: {
        id: "154891",
        name: "Rasraj Restaurant",
        cloudinaryImageId: "egbr63ulc8h1zgliivd8",
        locality: "Civil Line",
        areaName: "Civil Lines",
        costForTwo: "₹250 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Street Food",
          "Chinese",
          "Pizzas",
          "Fast Food",
        ],
        avgRating: 4.2,
      },
    },
  ]);
  console.log(listOfRestaurant);

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
