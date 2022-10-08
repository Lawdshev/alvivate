import './styles/App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import React from "react";
import {Routes,Route} from 'react-router-dom';
import { UserAuthContextProvider } from './utilities/UserAuthContextProvider';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './utilities/ProtectedRoute';
import Women from "./Pages/Women";
import Men from './Pages/Men';
import Signout from './components/Signout';
import TopNav from './components/TopNav';
import ProductDisplay from './Pages/ProductDisplay';

function App() {
  return (<>
    <TopNav/>
        <UserAuthContextProvider>
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
                path="/item/:id"
                element={
                  <ProtectedRoute>
                    <ProductDisplay/>
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
        </UserAuthContextProvider>
    
    </>
  );
}


export default App;
