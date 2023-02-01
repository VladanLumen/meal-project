import React from 'react'
import './topbar.css'
import searchImage from '../../images/search.png'
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


export const Searchbar = () => {
  return (
    <div className='searchbar'>
        <div className="sbLeft">
            <img src={searchImage} alt="" className="searchImage" />
        </div>
        <div className="sbRight">
            <input placeholder='write text...' type="text" className="searchInputField" />
        </div>
    </div>
  )
}


export default Topbar