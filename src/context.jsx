import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  useEffect(() => {}, [pageId]);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <GlobalContext.Provider
      value={{ openSidebar, closeSidebar, isSidebarOpen, pageId, setPageId }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
