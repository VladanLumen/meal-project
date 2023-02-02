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

  const appContext = useContext(AppContext) as {favoriteIngredients:string[],favoriteMeals:string[],addFavoriteMeal:(arg:string)=>{},addFavoriteIngredient:(arg:string)=>{}};
  const {addFavoriteMeal} = appContext;
  console.log(appContext);
  
  return (
    <div>
      <div className="meal-card" key={id}>
        <h1 className="meal-title">{data.strArea}</h1>
        <img onClick={() => addFavoriteMeal(data.strArea)} src={favIcon} alt='favourite' className="fav-icon"/>
        <img className="meal-img" src={data.strMealThumb} />
        <p className="meal-desc">{data.strInstructions.slice(0, 230)}</p>
        <Link to={`/${data.idMeal}`}><button className="meal-btn">Learn More</button></Link>
      </div>
    </div>
  );
};

export default Meals;
