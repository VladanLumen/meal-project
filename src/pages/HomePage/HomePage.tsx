import React, { useEffect, useState } from 'react'
import Meals from './Meals'
import './HomePage.css'

export interface MealType {
    strArea:string;
    strMealThumb:string;
    strInstructions:string;
    idMeal:number
  }

  interface MealInterface {
    id:number;






    
  }




const HomePage:React.FC = () => {
    const [data, setData] = useState<MealType[]>([])

    const fetchData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
              .then((response) => response.json())
              .then(data => setData(data.meals))
      }
      
    useEffect(() =>{
        fetchData()
    },[])

  return (
    <div className='meal-section'>
        {data.map((meal,id) =>{
            return(
                <Meals data={meal} id={id} />
              


            )
        })}
    </div>
  )
}

export default HomePage