import React, { useContext } from 'react'
import PageNumber from './PageNumber';
import sun from './sun.png';
import moon from './moon.png';
import { AppContext } from '../../App';

interface MaxPageNumber{
    maxPageNumber:number;
  }

const Paging = ({maxPageNumber}:MaxPageNumber) => {
  const appContext = useContext(AppContext) as {favoriteIngredients:string[],favoriteMeals:string[],addFavoriteMeal:(arg:string)=>{},addFavoriteIngredient:(arg:string)=>{},addFavoriteIngredientArray:(arg:string[])=>{},isDark:boolean,setIsDarkFunc:(arg:boolean)=>{}};
  const {isDark,setIsDarkFunc} = appContext;
  console.info(isDark);
    const numbers = [];
    for(let i=0;i<maxPageNumber;i++){
      numbers.push(i+1);
    }
    return (
      <div className='paging'>
        {
          numbers.map((item,id)=>{
            return (
              <PageNumber number={item} key={id}  />
            )
          })
        }
        <img onClick={()=>{setIsDarkFunc(!isDark)}} src={isDark?sun:moon} alt="" className="theme" />
      </div>
    )
  }

export default Paging