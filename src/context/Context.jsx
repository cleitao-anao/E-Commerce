import React, { createContext } from 'react';
import all_product from '../assets/js/all_product';

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  console.log("Array all_product carregado no contexto:", all_product); // Confirma o array

  const contextValue = { all_product };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
