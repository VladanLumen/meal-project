import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export interface User {
  email: string;
  username: string;
  password: string;
  userFavoriteMeals:string[]
}

export const UserContext = createContext<User | null>(null);

const Login: React.FC = () => {
  const [users, setUsers] = useState<User[]>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("currentUser") || "null")
  );
  
  console.log(users, currentUser);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
      
      );
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    };

  useEffect(() =>{

  },[currentUser])


  return (
    <UserContext.Provider value={currentUser}>

    <div className="login-background">
    
      
          <form className="login-form" onSubmit={handleLogin}>
            <input
              name="email"
              placeholder="E-mail"
              type="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              name="password"
              placeholder="Password"
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-button" type="submit" onClick={() => window.location.reload()}>Login</button>
            <p className="register-par">
              Don't have account?
          <Link className="register" to="/register">
            {" "}
            Register here
          </Link>
        </p>
          </form>
        
    
    </div>
    </UserContext.Provider>

  );
};

export default Login;
