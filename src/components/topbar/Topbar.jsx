import React from 'react'
import './topbar.css'
import Searchbar from './Search'


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

<Searchbar />


export default Topbar