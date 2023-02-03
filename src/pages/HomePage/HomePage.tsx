import React, { createContext, useContext, useEffect, useState } from "react";
import Meals from "./Meals";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homePage.css";
import Paging from "./Paging";
import { SearchContext } from "../../components/topbar/SearchContext";
import SearchedMeals from "./SearchedMeals";
import ErrorPage from "../ErrorPage/ErrorPage";

export interface MealType {
  strArea: string;
  strMealThumb: string;
  strInstructions: string;
  idMeal: number;
  strMeal: string;
}

interface PageNumber {
  number: number;
}

export const HomePageContext = createContext({});

const HomePage: React.FC = () => {
  const [data, setData] = useState<MealType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage, setMealsPerPage] = useState(8);

  const searchContext = useContext(SearchContext) as {
    myMeal: string[];
    setMyMealFunc: (arg: string) => {};
  };
  const { myMeal, setMyMealFunc } = searchContext;

  const fetchData = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
    )
      .then((response) => response.json())
      .then((data) => setData(data.meals));
  };

  useEffect(() => {
    fetchData();
  }, [searchContext]);

  return (
    <div>
      <Topbar nameFirstLetter={"B"} />
      <div className="mainSection">
        <div className="msLeft">
          <Sidebar />
        </div>
        {myMeal.length === 0 ? (
          <div className="msRight">
            {data
              .slice(
                (currentPage - 1) * mealsPerPage,
                currentPage * mealsPerPage
              )
              .map((meal, id) => {
                return (
                  <>
                    <Meals data={meal} id={id} />
                  </>
                );
              })}
            <HomePageContext.Provider value={{ currentPage, setCurrentPage }}>
              <Paging maxPageNumber={Math.ceil(data.length / mealsPerPage)} />
            </HomePageContext.Provider>
          </div>
        ) : (
          <div className="msRight">
            <>{console.log("MY MEAL", myMeal)}</>
            {myMeal.map((item: any, id) => {
              console.log("ITEM", item);

              return (
                <>
                {item === null?
                  <ErrorPage />
                  :
                <>
                  {item
                    .slice(
                      (currentPage - 1) * mealsPerPage,
                      currentPage * mealsPerPage
                      )
                      .map((meal: any) => {
                        return (
                          <>
                          <SearchedMeals data={meal} />
                        </>
                      );
                    })}
                  <HomePageContext.Provider
                  value={{ currentPage, setCurrentPage }}
                  >
                    <Paging
                      maxPageNumber={Math.ceil(item.length / mealsPerPage)}
                      />
                  </HomePageContext.Provider>
                  </>
                    }
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
