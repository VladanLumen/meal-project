import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MealType } from "./HomePage";
import favIcon from '../../images/favourite.png'
import { AppContext } from "../../App";


interface MealsProps {
  data: MealType;
  id: number;
}

const Meals: React.FC<MealsProps> = ({data, id}) => {

  const appContext = useContext(AppContext) as {favoriteIngredients:string[],favoriteMeals:string[],addFavoriteMeal:(arg:string)=>{},addFavoriteIngredient:(arg:string)=>{},addFavoriteIngredientArray:(arg:string[])=>{},isDark:boolean};
  const {addFavoriteMeal,addFavoriteIngredient,addFavoriteIngredientArray,isDark} = appContext;
  

  const addFavoriteIngredients =()=>{
    console.log(data);
    const ings:string[] = [];
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
  }

  return (
    <div key={id}>
      <div className={`meal-card${isDark?'-dark':''}`}>
        <h1 className={`meal-title${isDark?'-white':''}`}>{data.strMeal}</h1>
        <img onClick={() => {addFavoriteMeal(data.strMeal); addFavoriteIngredients();}} src={favIcon} alt='favourite' className="fav-icon"/>
        <img className="meal-img" src={data.strMealThumb} />
        <p className={`meal-desc${isDark?'-white':''}`}>{data.strInstructions.slice(0, 230)}</p>
        <Link to={`/${data.idMeal}`}><button className="meal-btn">Learn More</button></Link> 
      </div>
    </div>
  );
};

export default Meals;
