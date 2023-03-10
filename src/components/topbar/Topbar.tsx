import "./topbar.css";
import Searchbar from "./Search";
import { useContext, useEffect, useState } from "react";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { Link } from "react-router-dom";
import { User } from "../../pages/LoginPage/Login";
import { AppContext } from "../../App";

const Topbar = () => {
  const appContext = useContext(AppContext) as {
    favoriteIngredients: string[];
    favoriteMeals: string[];
    addFavoriteMeal: (arg: string) => {};
    addFavoriteIngredient: (arg: string) => {};
    addFavoriteIngredientArray: (arg: string[]) => {};
    isDark: boolean;
    setIsDarkFunc: (arg: boolean) => {};
  };
  const { isDark, setIsDarkFunc } = appContext;


  return (
    <div className="topbar">
      <div className="tleft">
        <NamePlaceholder />
        <Link className="homeBtn" to="/">Home</Link>
      </div>
      <div className="tright">
        <Searchbar />
      </div>
      <img
        onClick={() => {
          setIsDarkFunc(!isDark);
        }}
        src={isDark ? sun : moon}
        alt=""
        className="theme"
      />
    </div>
  );
};

const NamePlaceholder = ({ users }: any) => {
  const listUsers = JSON.parse(localStorage.getItem("users") || "{}");

  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("currentUser") || "null")
  );
  
  const [hover, setHover] = useState(false);

  const handleUsersList = () => {
    setHover(!hover);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <div>
      <button className="namePlaceholder" onClick={handleUsersList}>
        {currentUser?.username}
      </button>
      
      <div className={hover ? "hover-on" : "hover-off"}>
        {listUsers.map((user: any, id: number) => {
          return (
            <div key={id}>
              <p className="our-user">{user.email}</p>
            </div>
          );
        })}
      </div>
      <span onClick={() => window.location.reload()}>

      <button className="loguoutBtn" onClick={handleLogout}>Logout</button>
      
      </span>

    </div>
  );
};

<Searchbar />;

export default Topbar;


