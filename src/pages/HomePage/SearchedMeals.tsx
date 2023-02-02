import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MealType } from "./HomePage";
import favIcon from "../../images/favourite.png";
import { AppContext } from "../../App";
import './searchMeal.css'

const SearchedMeals = ({ data, id }: any) => {

  const appContext = useContext(AppContext) as {
    favoriteIngredients: string[];
    favoriteMeals: string[];
    addFavoriteMeal: (arg: string) => {};
    addFavoriteIngredient: (arg: string) => {};
  };
  const { addFavoriteMeal } = appContext;

  return (
            <div className="search-card" key={id}>
              <h1 className="search-title">{data.strArea}</h1>
              <img
                onClick={() => addFavoriteMeal(data.strArea)}
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
