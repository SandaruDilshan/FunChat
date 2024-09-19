import React from 'react'
import { CiLogout } from "react-icons/ci";
import useLogout from '../../hooks/useLogout.js';

const LogoutBtn = () => {

  const { loading, logout } = useLogout();

  return (
    <div className='mt-auto'>
      {loading ? (
        //<CiLogout className='w-6 h-6 text-white cursor-pointer' onClick={logout} /> 
        <span className='loading loading-spinner'></span>
      ) : (
        <CiLogout className='w-6 h-6 text-white cursor-pointer' onClick={logout} /> 
      )}
    </div>  
  )
  console.log(loading);
}

export default LogoutBtn;
