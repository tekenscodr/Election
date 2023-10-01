"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useAuth } from '../backjob/authmiddleware';

export const Header = () => {
  const { user, logout } = useAuth();
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
   if(clicked === false) {
     setClicked(true);
    }else { 
      setClicked(false);
    }    
  };

  const handleLogout = async() => {
    // Perform logout logic here
    setClicked(false);
    logout();
    // router.replace('/')
    return 
  };

  return (
    <div className='flex bg-white justify-between px-4 pt-4'>
        <h2>Dashboard</h2>
        <div  className='cursor-pointer' onClick={handleClick}>
        <h2 >Welcome Back, {user?.firstname}</h2>
      {clicked && (
        <button onClick={handleLogout}>Logout</button>
      )}
        </div>
    </div>
  )
}
