import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MealType } from "./HomePage";

interface MealsProps {
  data: MealType;
  id: number;
}

const Meals: React.FC<MealsProps> = ({data, id}) => {

  return (
    <div>
      <div className="meal-card" key={id}>
        <h1 className="meal-title">{data.strArea}</h1>
        <img className="meal-img" src={data.strMealThumb} />
        <p className="meal-desc">{data.strInstructions.slice(0, 230)}</p>
        <Link to={`/${data.idMeal}`}><button className="meal-btn">Learn More</button></Link>
      </div>
    </div>
  );
};

export default Meals;
