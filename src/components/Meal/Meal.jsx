import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Meal.css";

const Meal = ({ product, handleAddToCart }) => {
  const { strPlayer, strThumb, strNationality, dateBorn, strTeam } = product;

  return (
    <div className="product">
      <img
        src={
          strThumb
            ? strThumb
            : "https://ruhul-amin-sujon-portfolio.netlify.app/static/media/ruhul_amin_sujon.db7d6807.png"
        }
        alt={strPlayer}
      />
      <div className="product-info">
        <p className="product-name">Name: {strPlayer}</p>
        <p>Country: {strNationality}</p>
        <p>
          <small>Date of Birth: {dateBorn}</small>
        </p>
        <p>
          <small>Club: {strTeam ? strTeam : "Nothing found"}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(strPlayer)} className="btn-cart">
        <p className="btn-text">Add to My Team</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Meal;
