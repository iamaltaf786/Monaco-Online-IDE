import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [isGridLayout, setIsGridLayout] = useState(false);

  return (
    <LayoutContext.Provider value={{ isGridLayout, setIsGridLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  return useContext(LayoutContext);
};
