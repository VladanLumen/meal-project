import React, { useContext } from 'react'
import { HomePageContext } from './HomePage';


interface PageNumber{
    number:number;
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

export default PageNumber