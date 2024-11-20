import React, { createContext } from 'react'
import all_product from "../assets/css/all_product"
export const Context = createContext(null);

const ContextProvider = (props) => {

    const contextValue = {all_product};

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;