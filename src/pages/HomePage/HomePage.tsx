import React, { createContext, useContext, useEffect, useState } from 'react'
import Meals from './Meals'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './homePage.css';
export interface MealType {
  strArea: string;
  strMealThumb: string;
  strInstructions: string;
  idMeal:number;
}

interface MaxPageNumber{
  maxPageNumber:number;
}

interface PageNumber{
  number:number;
}

const HomePageContext = createContext({});

  const HomePage: React.FC = () => {
  const [data, setData] = useState<MealType[]>([])
  const [currentPage,setCurrentPage] = useState(2);
  const [mealsPerPage,setMealsPerPage] = useState(8);

  const fetchData = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((response) => response.json())
      .then(data => setData(data.meals))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Topbar nameFirstLetter={"B"} />
      <div className="mainSection">
        <div className="msLeft">
        <Sidebar />
        </div>
        <div className="msRight">
        {data.slice((currentPage-1)*mealsPerPage,currentPage*mealsPerPage).map((meal, id) => {
          return (
            <Meals data={meal} id={id} />
          )
        })}
        </div>
      </div>
      <HomePageContext.Provider value={{currentPage,setCurrentPage}}>
      <Paging maxPageNumber={Math.ceil(data.length/mealsPerPage)}/>
      </HomePageContext.Provider>
    </div>
  )
}




const Paging = ({maxPageNumber}:MaxPageNumber) => {
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
    </div>
  )
}






const PageNumber = ({number}:PageNumber) => {
  const context = useContext(HomePageContext) as {currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>};
  const {currentPage,setCurrentPage} = context;
  return (
     <div className={`pageNumber${number===currentPage?'Clicked':''}`} onClick={()=>{
      setCurrentPage(number);
     }}>
       {number}
    </div>
  )
}



export default HomePage