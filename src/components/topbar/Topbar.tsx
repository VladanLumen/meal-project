import './topbar.css'
import Searchbar from './Search'
import { useContext, useState } from 'react'
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

    const listUsers = JSON.parse(localStorage.getItem("users") || '{}')

    const [hover, setHover] = useState(false);

    const handleUsersList = () =>{
        setHover(!hover)
    }

    console.log(hover);
    
    return (
        <div>
            <button className="namePlaceholder" onClick={handleUsersList}>Users</button>
            <div className={hover ? "hover-on" : "hover-off"}>
                {listUsers.map((user:any, id:number) =>{
                    return (
                        <div key={id}>
                            <p className='our-user'>{user.email}</p>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

<Searchbar />


export default Topbar