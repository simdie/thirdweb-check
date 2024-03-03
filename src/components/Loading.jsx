import React from 'react'

import { loader } from '../assets';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.85)] flex items-center justify-center flex-col">
      <img src={loader} alt="loader" className="w-[150px] h-[150px] object-contain"/>
      <p className="mt-[20px] font-epilogue font-bold text-[25px] text-white text-center">Checking Information Securely <br /> Loging out...</p>
    </div>
  )
}

export default Loading