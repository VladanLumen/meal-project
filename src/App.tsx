import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/Login";
import OneMeal from "./pages/OneMeal/OneMeal";
import Register from "./pages/Register/Register";


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
    setIngredients([...favoriteIngredients,idIngredient]);
  }

  return (
    <div>
      <AppContext.Provider value={{favoriteIngredients,favoriteMeals,addFavoriteMeal,addFavoriteIngredient}}>
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
      </AppContext.Provider>
    </div>
  );
}

export default App;
