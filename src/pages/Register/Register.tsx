import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

interface User {
  email: string;
  username: string;
  password: string;
  userFavoriteMeals: string[];
}

interface UsersContext {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  userFavoriteMeals: string[];
  setUserFavoriteMealsFunc: (newMeal: string) => void;
}

const UsersContext = React.createContext<UsersContext | undefined>(undefined);

const UserRegistration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userFavoriteMeals] = useState<string[]>([]);

  const context = useContext(UsersContext);
  console.log(context);

  if (!context) {
    throw new Error("Context must be used within UsersContextProvider");
  }
  const { users, setUsers } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    const newUser: User = { email, username, password, userFavoriteMeals };
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
  };

  return (
    <div className="register-background">
      <form className="register-form" onSubmit={handleSubmit}>
        <h3>Register Here</h3>
        <label htmlFor="" className="register-label">
          Email
        </label>
        <input
          className="register-input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" className="register-label">
          Username
        </label>
        <input
          className="register-input"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="" className="register-label">
          Password
        </label>
        <input
          className="register-input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <label htmlFor="" className="register-label">
          Confirm Password
        </label>
        <input
          className="register-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="register-button"
          onClick={() => window.location.assign("/")}
        >
          Register
        </button>
        <p className="register-par">
          Allready have account?
          <Link className="register" to="/">
            {" "}
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export const UsersProvider = ({ children }: any) => {
  const [userFavoriteMeals, setUserFavoriteMeals] = useState<string[]>([]);
  const setUserFavoriteMealsFunc = (newMeal: string) => {
    setUserFavoriteMeals([...userFavoriteMeals, newMeal]);
  };
  const [users, setUsers] = useState<User[]>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );

  return (
    <UsersContext.Provider
      value={{ users, setUsers, userFavoriteMeals, setUserFavoriteMealsFunc }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UserRegistration;
