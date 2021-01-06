import React, { createContext } from "react";

export const gameContext = createContext();

export const GameContextProvider = ({ children, value }) => {
  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
};
