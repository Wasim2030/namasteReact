import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // const params = useParams();
  // console.log(params);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.97210&lng=72.82460&restaurantId=683064&catalog_qa=undefined&submitAction=ENTER"

    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  // Perform the destructuring only when `resInfo` is not null
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3></h3>
      <ul>
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>{itemCards[3].card.info.name}</li> */}
        {itemCards &&
          itemCards.map((item) => (
            <li key={item.card.info.name}>
              {item.card.info.name} - {"Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

/**
 * Notes 
 * {itemCards && itemCards.map((item) => <li>{item.card.info.name}</li>)}
 * How && Works in JavaScript
The logical AND (&&) operator evaluates the left-hand operand and, if it is truthy, evaluates and returns the right-hand operand. If the left-hand operand is falsy, it skips evaluating the right-hand operand and simply returns the left-hand value.

Why It's Used Here
Condition Check for itemCards:

itemCards && itemCards.map(...) ensures that itemCards is truthy (not undefined, null, or any other falsy value) before attempting to call .map() on it.
This prevents runtime errors like TypeError: Cannot read properties of undefined (reading 'map').
Short-Circuiting Behavior:

If itemCards is falsy (e.g., null, undefined, or an empty value), the expression on the right side of && (itemCards.map(...)) is not executed.
If itemCards is truthy (e.g., an array), the .map() function is executed.

Example 1: When itemCards is null
const itemCards = null;
{itemCards && itemCards.map(item => <li>{item.name}</li>)}
itemCards is falsy, so the right-hand side is not evaluated, and nothing is rendered.

Example 2: When itemCards is an Array
const itemCards = [{ name: "Biryani" }, { name: "Burger" }];
{itemCards && itemCards.map(item => <li>{item.name}</li>)}
itemCards is truthy, so .map() is executed, and a list of <li> elements is rendered.

Why Not Use an if Statement?
JSX doesn't allow you to use statements like if directly inside the template. Using && is a concise way to conditionally render elements.

Equivalent Using a Ternary Operator
You could achieve the same result with a ternary operator:
<ul>
  {itemCards ? itemCards.map((item) => (
    <li key={item.card.info.id}>{item.card.info.name}</li>
  )) : null}
</ul>
However, the && approach is shorter and easier to read when you don't need to render anything in the "false" case.

&& ensures .map() is only called when itemCards exists and is truthy.
It protects your app from errors and provides a clean, concise way to handle conditional rendering in JSX.
 */
