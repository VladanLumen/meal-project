import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext({});

export const SearchContextProvider = ({children}:any) =>{
    const [myMeal, setMyMeal] = useState<string[]>([]);

    const setMyMealFunc = (meal:string) =>{
        setMyMeal([...myMeal,meal]);
    }

    return (
        <SearchContext.Provider value={{myMeal,setMyMealFunc}}>{children}</SearchContext.Provider>
    )
}