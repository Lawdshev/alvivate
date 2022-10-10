import React,{ createContext,useContext,useState} from 'react';

const productContext = createContext();

export function ProductsContextProvider({children}) {
    //counter
    
    
    //cart
    const [cart,setCart] = useState([]);

  return (
    <productContext.Provider value={{cart,setCart}}>
        {children}
    </productContext.Provider>
  )
};

export function useProductContext() {
    return useContext(productContext)
};