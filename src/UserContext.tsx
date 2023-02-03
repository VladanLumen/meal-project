import { createContext, useState } from "react";

export const UserContext = createContext({});


export const UserContextProvider = ({children}:any) =>{
    const [username, setUsername] = useState<String>(``);

    const setUsernameFunc = (name:String) =>{
        setUsername(name);
    }

    const value = {
        username,setUsernameFunc
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}