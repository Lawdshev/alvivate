import './styles/App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import React from "react";
import {Routes,Route} from 'react-router-dom';
import { UserAuthContextProvider } from './utilities/UserAuthContextProvider';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './utilities/ProtectedRoute';
import Women from "./Pages/Women";
import Men from './Pages/Men';
import Signout from './components/Signout';
import TopNav from './components/TopNav';
import ProductDisplay from './Pages/productDisplay';
import Footer from './components/Footer';
import Promo from './Pages/Promo';
import Groups from './Pages/Groups';

function App() {
  return (<>
        <UserAuthContextProvider>
          <TopNav/>
          <Routes>
            <Route
                path="/Home"
                element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/product/:id"
                element={
                  <ProtectedRoute>
                    <ProductDisplay/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/Promo/:id/Groups"
                element={
                  <ProtectedRoute>
                    <Groups/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/Promo/:id"
                element={
                  <ProtectedRoute>
                    <Promo/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/Men"
                element={
                  <ProtectedRoute>
                    <Men/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/Women"
                element={
                  <ProtectedRoute>
                    <Women/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/Signout"
                element={
                  <ProtectedRoute>
                    <Signout/>
                  </ProtectedRoute>
                }
              />
            
            <Route path="/" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
          </Routes>
            <Footer/>
        </UserAuthContextProvider>    
    </>
  );
}
export default App;
