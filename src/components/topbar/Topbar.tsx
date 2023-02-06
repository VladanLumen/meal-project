import "./topbar.css";
import Searchbar from "./Search";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../pages/LoginPage/Login";
import { Link } from "react-router-dom";

const Topbar = () => {
  const { users }: any = useContext(LoginContext);

  const [data, setData] = useState("");

  const fetchData = async () => {
    const res = await fetch(
      "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    )
      .then((response) => response.json())
      .then((data) => setData(data.meals));
  };

  return (
    <div className="topbar">
      <div className="tleft">
        <NamePlaceholder />
        <Link to="/">Home</Link>
      </div>
      <div className="tright">
        <Searchbar />
      </div>
    </div>
  );
};

const NamePlaceholder = ({ users }: any) => {
  const listUsers = JSON.parse(localStorage.getItem("users") || "{}");

  const [hover, setHover] = useState(false);

  const handleUsersList = () => {
    setHover(!hover);
  };

  console.log(hover);

  return (
    <div>
      <button className="namePlaceholder" onClick={handleUsersList}>
        Users
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
    </div>
  );
};

<Searchbar />;

export default Topbar;
