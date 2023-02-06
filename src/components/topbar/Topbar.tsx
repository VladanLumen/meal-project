import './topbar.css'
import Searchbar from './Search'
import { useContext } from 'react'
import { LoginContext } from '../../pages/LoginPage/Login'

const Topbar = () => {
    const {users}:any = useContext(LoginContext)
    
    

    return (
        <div className='topbar'>
            <div className="tleft">
               <NamePlaceholder />
               <a className='homeBtn' href='/'>Home</a>
            </div>
            <div className="tright">
                <Searchbar/>
            </div>
        </div>
    )
}

const NamePlaceholder = ({users}:any) => {
    return (
        <div className="namePlaceholder">
            <p className="nameFirstLetter">
            {users[0].name.slice(0 , 1)}
            </p>
        </div>
    )
}

<Searchbar />


export default Topbar