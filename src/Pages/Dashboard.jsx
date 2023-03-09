import { useUserAuth } from '../utilities/UserAuthContextProvider';
import React,{useEffect} from 'react';


function Dashboard() {
  const { user } = useUserAuth();
  useEffect(() => {
    let transactions = localStorage.getItem('transactions');
    console.log(JSON.parse(transactions))
  }, [])
  
  return (
    <div className="flex flex-col lg:flex-row w-screen px-10 justify-around lg:mt-2 " style={{minHeight:'100vh',color:'#120241'}}>
      
    </div>
  )
}
export default Dashboard;