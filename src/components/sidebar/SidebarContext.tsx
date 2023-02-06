import { useState, createContext } from "react";

export const SidebarContext = createContext({});

export const SidebarContextProvider = ({ children }: any) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };

  const value = {
    showSidebar,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
