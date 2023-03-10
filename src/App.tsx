import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SearchContextProvider } from "./components/topbar/SearchContext";
import HomePage from "./pages/HomePage/HomePage";
import Login, { User }  from "./pages/LoginPage/Login";
import OneMeal from "./pages/OneMeal/OneMeal";
import Register, { UsersProvider } from "./pages/Register/Register";
import { SidebarContextProvider } from "./components/sidebar/SidebarContext";
import { useEffect } from "react";


export const AppContext = createContext({});

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [favoriteIngredients, setIngredients] = useState<string[]>([]);
  const [favoriteMeals, setMeals] = useState<string[]>([]);
  const [isDark, setIsDark] = useState<boolean>(false);

  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("currentUser") || "null")
  );

  const addFavoriteMeal = (idMeal: string) => {
    if (!favoriteMeals.includes(idMeal)) {
      setMeals([...favoriteMeals, idMeal]);
    }
  };
  const addFavoriteIngredient = (idIngredient: string) => {
    

    if (!favoriteIngredients.includes(idIngredient))
      setIngredients([...favoriteIngredients, idIngredient]);
  };
  const addFavoriteIngredientArray = (
      newFavorites: string[]
  ) => {
    setIngredients([
      ...Array.from(new Set([...favoriteIngredients, ...newFavorites])),
      
    ]);
  };

  const deleteMeal = (meal: string) => {
    setMeals(favoriteMeals.filter((i) => i !== meal));
  };

  const setIsDarkFunc = (isDark: boolean) => {
    setIsDark(isDark);
  };

  useEffect(() =>{
  },[])

  return (
    <div>
      <AppContext.Provider
        value={{
          addFavoriteIngredientArray,
          favoriteIngredients,
          favoriteMeals,
          addFavoriteMeal,
          addFavoriteIngredient,
          deleteMeal,
          isLogged,
          setIsLogged,
          isDark,
          setIsDarkFunc,
        }}
      >
        <SearchContextProvider>
          <SidebarContextProvider>
            <UsersProvider>
                {currentUser ? (
                  <div>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/:id" element={<OneMeal />} />
                    </Routes>
                  </div>
                ) : (
                  <div>
                    <Routes>
                      <Route path="/" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                    </Routes>
                  </div>
                )}
            </UsersProvider>
          </SidebarContextProvider>
        </SearchContextProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
