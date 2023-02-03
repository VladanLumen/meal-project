import React, { useState } from 'react';

interface UserData {
  username: string;
  password: string;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
}

const UserContext = React.createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
});



export const UserProvider: React.FC = ({ children }:any) => {
    const [userData, setUserData] = useState<UserData | null>(null);


  return (
    <UserContext.Provider value={{ userData, setUserData}}>
      {children}
    </UserContext.Provider>
  );
};