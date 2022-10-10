import React,{ createContext,useContext,useState} from 'react';

const productContext = createContext();

export function ProductsContextProvider({children}) {
    //counter
    const [count,setCount] = useState(0);
    const countplus = () =>{
            setCount((prevState) => prevState + 1)     
    }
    const countminus = () =>{
        if(count === 0){
            setCount(0);
            return;
        }
        setCount((prevState) => prevState - 1)     
    }
    
    //cart
    const [cart,setCart] = useState([]);

  return (
    <productContext.Provider value={{cart,setCart,count,countplus,countminus}}>
        {children}
    </productContext.Provider>
  )
};

export function useProductContext() {
    return useContext(productContext)
};