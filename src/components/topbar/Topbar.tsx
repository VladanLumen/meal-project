import './topbar.css'
import Searchbar from './Search'
import { useContext } from 'react'
import { LoginContext } from '../../pages/LoginPage/Login'

const Topbar = () => {
    const {users}:any = useContext(LoginContext)
    console.log(users.email);
    

    return (
        <div className='topbar'>
            <div className="tleft">
               {users[0].name.slice(0 , 1)}
            </div>
            <div className="tright">
                <Searchbar/>
            </div>
        </div>
    )
}

const NamePlaceholder = ({nameFirstLetter}:any) => {
    return (
        <div className="namePlaceholder">
            <p className="nameFirstLetter">
                {nameFirstLetter}
            </p>
        </div>
    )
}

<Searchbar />


export default Topbar