import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/Login";
import OneMeal from "./pages/OneMeal/OneMeal";
import Register from "./pages/Register/Register";


interface oneMealType {
  idMeal:number
}

function App() {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <div>
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
    </div>
  );
}

export default App;
