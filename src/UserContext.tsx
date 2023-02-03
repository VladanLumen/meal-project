import { createContext, useState } from "react";

export interface UserType{
    name:string;
    password: string;
    email:string;
}

export const UserContext = createContext({});


export const UserContextProvider = ({children}:any) =>{
    const [user, setUser] = useState<UserType[]>([]);

    const setUsernameFunc = (data:UserType) =>{
        setUser([...user,data]);
    }

    const value = {
        user: user,setUsernameFunc
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}