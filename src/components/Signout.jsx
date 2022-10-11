import React from 'react';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';

function Signout() {
  const {logOut} = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
     <div className="flex justify-center flex-col " style={{height: '82vh'}}>
      <div className=" text-center text-xl italic">
       We hate to see you go
      </div>
      <Button onClick={handleLogout} className="w-2/6 lg:w-1/4 self-center">Log out</Button>
      </div>
    </>
  );
}
export default Signout;