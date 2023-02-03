import { createContext, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SearchContextProvider } from "./components/topbar/SearchContext";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/Login";
import OneMeal from "./pages/OneMeal/OneMeal";
import Register, { UsersProvider } from "./pages/Register/Register";


export const AppContext = createContext({});

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [favoriteIngredients, setIngredients] = useState<string[]>([]);
  const [favoriteMeals, setMeals] = useState<string[]>([]);

  const addFavoriteMeal = (idMeal:string)=>{
    if(!favoriteMeals.includes(idMeal)){
      setMeals([...favoriteMeals,idMeal])
    }
  }
  const addFavoriteIngredient = (idIngredient:string)=>{
    if(!favoriteIngredients.includes(idIngredient))
    setIngredients([...favoriteIngredients,idIngredient]);
  }

  const deleteMeal = (meal:string) => {
    setMeals(favoriteMeals.filter(i => i !== meal));
  };

  return (
    <div>
      <AppContext.Provider value={{favoriteIngredients,favoriteMeals,addFavoriteMeal,addFavoriteIngredient, deleteMeal}}>
        <SearchContextProvider>
    <UsersProvider>

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
      </UsersProvider>
      </SearchContextProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
