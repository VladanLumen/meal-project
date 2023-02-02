import { createContext, useContext, useEffect, useState } from 'react';
import './sidebar.css'
import { AppContext } from '../../App';

type SidebarSection = {
  name:string,
  data:string[]
  showDelete:boolean
}


const Sidebar = () => {

  const appContext = useContext(AppContext) as {favoriteIngredients:string[],favoriteMeals:string[],addFavoriteMeal:(arg:string)=>{},addFavoriteIngredient:(arg:string)=>{}};
  const {favoriteIngredients,favoriteMeals,addFavoriteMeal,addFavoriteIngredient} = appContext;

  const ingredients = ["Flout","Milk","Eggs","Beef","Onions"]
  return (
    <div className='sidebar'>
      <SidebarSection name={"Meal"} data={favoriteMeals} showDelete={true}/> 
      <SidebarSection name={"Ingredient"} data={ingredients} showDelete={false}/>
    </div>
  )
}


const SidebarSection = ({name,data,showDelete}:SidebarSection) => {

  const appContext = useContext(AppContext) as {favoriteIngredients:string[],favoriteMeals:string[],addFavoriteMeal:(arg:string)=>{},addFavoriteIngredient:(arg:string)=>{},deleteMeal:(arg:string)=>{}};
  const {deleteMeal} = appContext;

  return (
    <div className='sidebarSection'>
      <h2 className="sectionName">{name}</h2>
      <div className="sectionItems">
      {
        data.map((item,id)=>{
          return (
            <div className="itemWrap">
              <p key={id} className="item">{item}</p>
              {showDelete && <button onClick={()=>{deleteMeal(item)}} className='deleteItem'>X</button>}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Sidebar