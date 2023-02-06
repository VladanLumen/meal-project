import React, { createContext, useState } from 'react';

interface UserData {
  username: string;
  password: string;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = React.createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
  isLogged: false,
  setIsLogged: () => {}
});



export const UserProvider: React.FC = ({ children }:any) => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isLogged, setIsLogged] = useState(false)
    console.log(userData);
    
    

  return (
    <UserContext.Provider value={{ userData, setUserData, isLogged, setIsLogged}}>
      {children}
    </UserContext.Provider>
  );
};