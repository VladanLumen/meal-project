import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MealType } from "./HomePage";
import favIcon from "../../images/favourite.png";
import { AppContext } from "../../App";
import "./searchMeal.css";

const SearchedMeals = ({ data, id }: any) => {
  const appContext = useContext(AppContext) as {
    favoriteIngredients: string[];
    favoriteMeals: string[];
    addFavoriteMeal: (arg: string) => {};
    addFavoriteIngredient: (arg: string) => {};
    addFavoriteIngredientArray: (arg: string[]) => {};
    deleteMeal: (arg: string) => {};
  };
  const { addFavoriteMeal, addFavoriteIngredientArray, deleteMeal } =
    appContext;

  const addFavoriteIngredients = () => {
    const ings: string[] = [];
    ings.push(data.strIngredient1);
    ings.push(data.strIngredient2);
    ings.push(data.strIngredient3);
    ings.push(data.strIngredient4);
    ings.push(data.strIngredient5);
    ings.push(data.strIngredient6);
    ings.push(data.strIngredient7);
    ings.push(data.strIngredient8);
    ings.push(data.strIngredient9);
    ings.push(data.strIngredient10);

    addFavoriteIngredientArray(ings);
  };

  return (
    <div className="search-card" key={id}>
      <h1 className="search-title">{data.strMeal}</h1>
      <img
        onClick={() => {
          addFavoriteMeal(data.strMeal);
          addFavoriteIngredients();
        }}
        src={favIcon}
        alt="favourite"
        className="fav-icon"
      />
      <img className="search-img" src={data.strMealThumb} />
      <p className="search-desc">{data.strInstructions.slice(0, 230)}</p>
      <Link to={`/${data.idMeal}`}>
        <button className="search-btn">Learn More</button>
      </Link>
    </div>
  );
};

export default SearchedMeals;
