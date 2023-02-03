import React, { useContext, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { AppContext } from "../../App";
import { UserProvider } from "../../UserContext";
import "./Login.css";


interface IAccount {
  password: string,
  email: string
}

const Login = () => {
  const [input, setInput] = useState<IAccount >({
    email: "",
    password:"",
})

const {isLogged, setIsLogged}:any = useContext(AppContext)


const logged = JSON.parse(localStorage.getItem("users") || '{}')
const handleLogin = () =>{
  
  if(input?.email === logged.email && input?.password === logged.password){
    localStorage.setItem("users", JSON.stringify(input))
    // window.location.assign('/')
    setIsLogged(true)
    return alert("SVAKA CAST")
  }else {
    
    window.location.assign('/') 
    return alert('Pogresna')
    
  }
}

console.log(isLogged, setIsLogged);
  console.log(input, logged);
  
  return (
      <div className="login-background">
    
      <form className="login-form">
        <h3>Login Here</h3>

        <label htmlFor="username" className="login-label">E-mail</label>
        <input name="email"
            value={input?.email}
            type='email'
            placeholder="E-mail"
            onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} className="login-input" />

        <label htmlFor="password" className="login-label">Password</label>
        <input name="password"
            value={input?.password}
            type='password'
            placeholder="Password"
            onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} className="login-input" />

        <button className="login-button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogin()}>Log In</button>
        <p className="login-par">
          Don't have account?
        <Link className="login" to='/register'> Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
