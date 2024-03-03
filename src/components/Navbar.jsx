import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDisconnect } from "@thirdweb-dev/react";
import { Loader, Loading } from '../components';

import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, eosi } from '../assets';
import { navlinks } from '../constants';
import { ConnectWallet } from "@thirdweb-dev/react";


const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  // const { connect, address } = useStateContext();

  // disconenct wallet
  const walletDisconnect = useDisconnect();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      await walletDisconnect(); // handle wallet disconnect function
      setIsLoading(true); // set isLoading to true to show loading image
      setTimeout(() => {
        navigate("/"); // navigate to home page after 4 seconds
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input type="text" placeholder="Search Eosi Finance traders" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
        
        <div className="w-[72px] h-full rounded-[20px] bg-purple-800 flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div>
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
        {/* <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        /> */}

        
           <ConnectWallet
              className="!rounded-xl !bg-purple-900   "
          />

          

        
          <div onClick={handleLogout}  className="w-[45px] h-[45px] rounded-full bg-yellow-600 flex justify-center items-center cursor-pointer">
            <p className='text-xs font-bold text-purple-900'>Logout</p>
          </div>
        
        {isLoading && <Loading />}
      </div>

      {/* Small screen navigation */}
        <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[135px] h-[55px] rounded-[10px] bg-yellow-700 flex justify-center items-center cursor-pointer">
            <p className=' font-bold text-purple-900 bg-yellow-700 '>EOSI Finance</p>
        </div>

          <img 
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex mx-4">
            {/* <CustomButton 
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }}
            /> */}

            <ConnectWallet />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar