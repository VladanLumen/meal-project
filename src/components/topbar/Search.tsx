import searchImage from "../../images/search.png";
import { createContext, useContext, useState } from "react";
import { SearchContext } from "./SearchContext";



const Searchbar = () => {
    const [search, setSearch] = useState("");
    const searchContext = useContext(SearchContext) as {myMeal:string[],setMyMealFunc:(arg:string)=>{}};
    const {myMeal,setMyMealFunc} = searchContext;

    const searchMeal = async (e: any) => {
    if (e.key == "Enter") {
      await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
          )
          .then((res) => res.json())
          .then((data) => {
            setMyMealFunc(data.meals);
              setSearch("");
            });
        }
    };
    

    return (
      <div className="searchbar">
        <div className="sbLeft">
          <img
            src={searchImage}
            alt=""
            className="searchImage"
            onClick={searchMeal}
          />
        </div>
        <div className="sbRight">
          <input
            placeholder="write text..."
            type="text"
            className="searchInputField"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            onKeyDown={searchMeal}
          />
        </div>
      </div>
  );
};

export default Searchbar;
