import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext({});

export const SearchContextProvider = ({ children }: any) => {
  const [myMeal, setMyMeal] = useState<string[]>([]);

  const setMyMealFunc = (meal: string) => {
    setMyMeal([meal]);
  };
  const clearMyMealFunc = () => {
    setMyMeal([]);
  };

  return (
    <SearchContext.Provider value={{ myMeal, setMyMealFunc, clearMyMealFunc }}>
      {children}
    </SearchContext.Provider>
  );
};
