import { createContext, useContext, useEffect, useState } from 'react';
import './sidebar.css'
import { AppContext } from '../../App';

type SidebarSectionName = {
  name:string,
  data:string[]
}


const Sidebar = () => {

  const appContext = useContext(AppContext) as {favoriteIngredients:string[],favoriteMeals:string[],addFavoriteMeal:(arg:string)=>{},addFavoriteIngredient:(arg:string)=>{}};
  const {favoriteIngredients,favoriteMeals,addFavoriteMeal,addFavoriteIngredient} = appContext;
  console.info(favoriteIngredients);
  console.info(favoriteMeals);
  // useEffect(() => {
  //   const fetchIngredients = async () => {
  //     const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  //     const data = await response.json();
  //     setIngredients(data.meals);
  //   };
  //   const fetchMeals = async () => {
  //     const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  //     const data = await response.json();
  //     setMeals(data.meals);
  //   };

  //   fetchIngredients();
  //   fetchMeals();
  // }, []);

  // const selectedMeals:string[] = [];
  // for(let i=0;i<favoriteMeals.length;i++){
    // selectedMeals.push(favoriteMeals[i]['strMeal']);
  // }
  // selectedMeals.push("Mosakue");
  // console.info(selectedMeals);

 
  // const selectedIngredients = favoriteIngredients.slice(0, 6);
  // const selectedIngredientsNames:string[] = [];
  // for(let i=0;i<selectedIngredients.length;i++){
  //   selectedIngredientsNames.push(selectedIngredients[i]['strIngredient']);
  // }
  // console.info(selectedIngredientsNames);


  return (
    <div className='sidebar'>
      <SidebarSection name={"Meal"} data={favoriteMeals} /> 
      <SidebarSection name={"Ingredient"} data={favoriteIngredients}/>
    </div>
  )
}


const SidebarSection = ({name,data}:SidebarSectionName) => {
  return (
    <div className='sidebarSection'>
      <p className="sectionName">{name}</p>
      <div className="sectionItems">
      {
        data.map((item,id)=>{
          return (
            <p key={id} className="item">{item}</p>
          )
        })
      }
      </div>
    </div>
  )
}




export default Sidebar