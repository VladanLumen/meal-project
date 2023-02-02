import React from 'react'
import PageNumber from './PageNumber';

interface MaxPageNumber{
    maxPageNumber:number;
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

export default Paging