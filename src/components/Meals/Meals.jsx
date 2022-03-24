import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleAddToCart = (props) => {
    let newCart = [];
    // console.log(props);
    newCart = [...cart, props];
    // newCart.push(props);
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            product={meal}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Meals;
