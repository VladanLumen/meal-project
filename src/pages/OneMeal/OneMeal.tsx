import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./OneMeal.css";

interface oneMealType {
  strArea: string;
  strCategory: string;
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strInstructions: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
}

const OneMeal = () => {
  const [oneMeal, setOneMeal] = useState<oneMealType>();
  const { id } = useParams();
  console.log(oneMeal);

  const fetchOneMeal = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((response) => response.json())
      .then((data) => setOneMeal(data.meals[0]));
  };

  useEffect(() => {
    fetchOneMeal();
  }, []);

  return (
    <div className="single">
      <Link to="/">
        <button className="go-home">Go to Home page</button>
      </Link>
      <div className="single-meal">
        <div className="meal-image">
          <img src={oneMeal?.strMealThumb} />
        </div>
        <div className="meal-content">
          <h1>Name: {oneMeal?.strMeal}</h1>
          <h2>Country: {oneMeal?.strArea}</h2>
          <h3>{oneMeal?.strTags}</h3>
          <p><span style={{fontWeight:'bold', fontSize:'20px'}}>How to prepare: </span>{oneMeal?.strInstructions}</p>
          <p>Ingrediant: {oneMeal?.strIngredient1} </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default OneMeal;
