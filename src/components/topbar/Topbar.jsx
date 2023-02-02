import React from 'react'
import './topbar.css'
import searchImage from '../../images/search.png'
import { useEffect, useState } from 'react'


const Topbar = ({ nameFirstLetter }) => {
    return (
        <div className='topbar'>
            <div className="tleft">
               <NamePlaceholder nameFirstLetter={nameFirstLetter}/>
            </div>
            <div className="tright">
                <Searchbar/>
            </div>
        </div>
    )
}

const NamePlaceholder = ({nameFirstLetter}) => {
    return (
        <div className="namePlaceholder">
            <p className="nameFirstLetter">
                {nameFirstLetter}
            </p>
        </div>
    )
}

//www.themealdb.com/api/json/v1/1/search.php?f=a

export const Searchbar = () => {

  const handleChange = (event) => {
    let value = event.target.value;
    if(value!=='' && value!==undefined && value!==' '){
        console.info(value);
    }
  };
  return (
    <div className='searchbar'>
        <div className="sbLeft">
            <img src={searchImage} alt="" className="searchImage" />
        </div>
        <div className="sbRight">
            <input placeholder='write text...' type="text" className="searchInputField" onChange={(e)=>{handleChange(e)}}/>
        </div>
    </div>
  )
}


export default Topbar