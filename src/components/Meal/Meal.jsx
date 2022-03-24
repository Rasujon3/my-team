import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Meal.css";

const Meal = ({ product, handleAddToCart }) => {
  const { strMeal, strMealThumb, strCategory, strArea, strTags } = product;

  return (
    <div className="product">
      <img src={strMealThumb} alt={strMeal} />
      <div className="product-info">
        <p className="product-name">Name: {strMeal}</p>
        <p>Category: {strCategory}</p>
        <p>
          <small>Area: {strArea}</small>
        </p>
        <p>
          <small>strTags: {strTags ? strTags : "Nothing found"}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(strMeal)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Meal;
