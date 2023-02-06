import { createContext, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SearchContextProvider } from "./components/topbar/SearchContext";
import HomePage from "./pages/HomePage/HomePage";
import Login, { LoginProvider } from "./pages/LoginPage/Login";
import OneMeal from "./pages/OneMeal/OneMeal";
import Register, { UsersProvider } from "./pages/Register/Register";
import { SidebarContextProvider } from "./components/sidebar/SidebarContext";

export const AppContext = createContext({});

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [favoriteIngredients, setIngredients] = useState<string[]>([]);
  const [favoriteMeals, setMeals] = useState<string[]>([]);
  const [isDark, setIsDark] = useState<boolean>(false);

  const [help, setHelp] = useState({});

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
    /*meal:string,*/ newFavorites: string[]
  ) => {
    // setHelp({"meal":meal,"ingredients":newFavorites})
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
              <LoginProvider>
                {isLogged ? (
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
              </LoginProvider>
            </UsersProvider>
          </SidebarContextProvider>
        </SearchContextProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
