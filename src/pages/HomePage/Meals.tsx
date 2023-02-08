import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MealType } from "./HomePage";
import favIcon from "../../images/favourite.png";
import { AppContext } from "../../App";

interface MealsProps {
  data: MealType;
  id: number;
}

const Meals: React.FC<MealsProps> = ({ data, id }) => {


  const appContext = useContext(AppContext) as {
    favoriteIngredients: string[];
    favoriteMeals: string[];
    addFavoriteMeal: (arg: string) => {};
    addFavoriteIngredient: (arg: string) => {};
    addFavoriteIngredientArray: (arg: string[]) => {};
    isDark: boolean;
  };
  const {
    addFavoriteMeal,
    addFavoriteIngredientArray,
    isDark,
  } = appContext;

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

    let usersAll = localStorage.getItem('users')
    let users = usersAll ? JSON.parse(usersAll) : {};

    let usersString = localStorage.getItem('currentUser');
    let usersCur = usersString ? JSON.parse(usersString) : {};

    for (let user in users) {
      if (users[user].email === usersCur.email) {
        let duplicateFound = false;
        for (let meal of users[user].userFavoriteMeals) {
          if (meal.length === ings.length && meal.every((value:any, index:any) => value === ings[index])) {
            duplicateFound = true;
            break;
          }
        }
        if (!duplicateFound) {
          users[user].userFavoriteMeals.push(ings);
        }
        break;
      }
    }
    
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(usersCur));
  };

  return (
    <div key={id}>
      <div className={`meal-card${isDark ? "-dark" : ""}`}>
        <h1 className={`meal-title${isDark ? "-white" : ""}`}>
          {data.strMeal}
        </h1>
        <img
          onClick={() => {
            addFavoriteMeal(data.strMeal);
            addFavoriteIngredients();
          }}
          src={favIcon}
          alt="favourite"
          className="fav-icon"
        />
        <img className="meal-img" src={data.strMealThumb} />
        <p className={`meal-desc${isDark ? "-white" : ""}`}>
          {data.strInstructions.slice(0, 200)}
        </p>
        <Link to={`/${data.idMeal}`}>
          <button className="meal-btn">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Meals;
