import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.player));
  }, [inputText]);

  const handleAddToCart = (props) => {
    let newCart = [];
    // console.log(props);
    newCart = [...cart, props];
    // newCart.push(props);
    setCart(newCart);
  };

  return (
    meals && (
      <>
        <input
          className="inputText"
          type="text"
          placeholder="Search player name..."
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="shop-container">
          <div className="products-container">
            {meals.map((meal) => (
              <Meal
                key={meal.idPlayer}
                product={meal}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <div className="cart-container">
            <Cart cart={cart} />
          </div>
        </div>
      </>
    )
  );
};

export default Meals;
