import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebaseSetup";
import axios from 'axios';



const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [AdminTransactions, setAdminTransactions] = useState([])
  let transactions = [];

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
    
    if (user?.email === "admin@apple.com") {
      setIsAdmin(true);

      const baseURL = "https://api.paystack.co"; // Base URL for Paystack API

      const config = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      };

      // Make the API request using axios
      axios
        .get(`${baseURL}/transaction`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const AllTransactions = response.data.data;
          setAdminTransactions(AllTransactions);
          console.log(AdminTransactions);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
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

  return (
    <userAuthContext.Provider
      value={{
        user,
        signUp,
        logIn,
        logOut,
        googleSignIn,
        cart,
        setCart,
        isAdmin,
        AdminTransactions,
      }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
