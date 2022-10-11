import { useUserAuth } from '../utilities/UserAuthContextProvider';
import React from 'react'

function Dashboard() {
  const {user} = useUserAuth();
  return (
    <div className="flex flex-col lg:flex-row w-screen px-10 justify-around lg:mt-2 " style={{minHeight:'100vh',color:'#120241'}}>
      <div className="flex flex-col text-center mt-2">
        <div className="avatar flex flex-col">
        <i class="fa-solid fa-user-tie text-5xl"></i>
        {user.email}
        <p> Referal Link:</p>
        <p className=" break-words">www.apple.com/{user.uid}</p>
        </div>
      </div>  
      <div className="flex flex-col mt-4">
        <h4 className="text-center">My Groups</h4>
        <div className="flex items-center justify-center " style={{minHeight:'10vh'}}> <p  className="italic text-gray-500">You have not joined any group yet</p> </div>
      </div>  
    </div>
  )
}
export default Dashboard;