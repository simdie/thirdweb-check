import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDisconnect } from "@thirdweb-dev/react";
import { Loader, Loading } from '../components';

import { logo, sun, logout } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  // logo link back to dashboard
  function handleDashboardClick() {
    navigate('/dashboard'); 
  }

  // function handleLogout() {
  //   navigate('/'); 
  // }

  
  // disconenct wallet
  const walletDisconnect = useDisconnect();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      await walletDisconnect(); // handle wallet disconnect function
      setIsLoading(true); // set isLoading to true to show loading image
      setTimeout(() => {
        navigate("/"); // navigate to home page after 4 seconds
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex justify-between items-start flex-col sticky top-5 h-[90vh] w-[40vh] ">
      {/* <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link> */}

      <div className="w-[150px] h-[45px] rounded-[10px] bg-yellow-600 flex justify-center items-center cursor-pointer ml-10">
        <p onClick={handleDashboardClick} className=' font-bold text-purple-900 bg-yellow-600 '>EOSI Finance </p>

      </div>

      

      <div className="flex-1 flex flex-col justify-between items-start bg-[#1c1c24] rounded-[20px] w-[40vh] py-7 mt-16">
        <div className="flex flex-col justify-center items-center gap-3">
          {/* {navlinks.map((link) => (
            
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}

              
            />
            

            
          ))} */}

            <ul className="mb-4 cursor-pointer">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex px-14 py-7 rounded-lg ${isActive === link.name && 'bg-zinc-800'}`}
                  onClick={() => {
                    setIsActive(link.name);
                    
                    navigate(link.link);
                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p  className={`ml-[40px] font-epilogue font-semibold text-[14px] hover:text-[#1dc071] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}` }>
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className='flex items-center  w-3/5 h-1/2 text-[#808191] hover:text-[#1dc071] cursor-pointer '>
              <img src={logout} alt="logout" className="w-[24px] h-[24px] text-[#808191] " />
              <button  onClick={handleLogout} className=' font-epilogue font-semibold text-[14px] ml-[43px]' >Logout</button>
            </div>
            {isLoading && <Loading />}

            
            
        </div>

        {/* <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} /> */}
        <div className='flex items-center justify-center   ml-6 shadow-lg rounded-md !shadow-gray-800 p-2 text-gray-600 font-semibold bg-gray-900 text-sm'>
         <p>EOSI Finance @ Copyright 2023</p>
        </div>

       
      </div>
    </div>
  )
}

export default Sidebar