import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext,useContext, useState , useEffect} from "react";
import { auth } from "./firebaseSetup";


const userAuthContext = createContext();

export function UserAuthContextProvider ({children}){
    const [user,setUser] = useState({});
    const [cart,setCart] = useState([]);

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth, email,password);
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
      return signOut(auth)
    }
    function googleSignIn() {
      const googleAuthProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleAuthProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          setUser(currentuser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
    

    return( 
    <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn,cart,setCart}}>
        {children}
    </userAuthContext.Provider>)
}

export function useUserAuth() {
    return useContext(userAuthContext)
};