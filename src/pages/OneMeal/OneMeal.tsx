import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import "./OneMeal.css";
import print from '../../images/print.png'

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
  const componentRef = useRef<HTMLDivElement>(null)

  const fetchOneMeal = async () => {
     await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((response) => response.json())
      .then((data) => setOneMeal(data.meals[0]));
  };


  useEffect(() => {
    fetchOneMeal();
  }, []);


  return (
    <div className="single" ref={componentRef }>
      <div className="single-meal">
        <div className="meal-image">
          <img src={oneMeal?.strMealThumb} alt={oneMeal?.strTags} />
        </div>
        <div className="meal-content">
          <h1 className="namePrint">Name: {oneMeal?.strMeal}  <ReactToPrint 
  trigger={() => <img style={{width: '25px'}} src={print} alt='Print' />}
  content={() => componentRef.current}
/></h1>
          <h2>Country: {oneMeal?.strArea}</h2>
          <h3>Tag: {oneMeal?.strTags}</h3>
          <p>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              How to prepare:{" "}
            </span>
            {oneMeal?.strInstructions}
          </p>
          <p>
            Ingrediant: {oneMeal?.strIngredient1}, {oneMeal?.strIngredient2},{" "}
            {oneMeal?.strIngredient3},{oneMeal?.strIngredient4},
            {oneMeal?.strIngredient5},{oneMeal?.strIngredient6},
            {oneMeal?.strIngredient7},{oneMeal?.strIngredient8}{" "}
          </p>
          <p>
            This is taken from:{" "}
            <a href={oneMeal?.strSource} target="_blank" rel="noreferrer">
              This site
            </a>
          </p>
          <p>
            If you want to see video click on link{" "}
            <a href={oneMeal?.strYoutube} target="_blank" rel="noreferrer">
              Youtube VIdeo
            </a>
          </p>
          <Link to="/">
            <button className="go-home">Go to Home page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OneMeal;
