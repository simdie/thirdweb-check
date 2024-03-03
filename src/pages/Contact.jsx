import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useAddress } from "@thirdweb-dev/react";

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader, Loading, Navbar, Sidebar } from '../components';
import { checkIfImage } from '../utils';


const Contact = () => {
  
  // const { createCampaign } = useStateContext();
  // const [form, setForm] = useState({
  //   name: '',
  //   traderName: '',
  //   minProfit: '',
  //   minCapital: '', 
  //   commission: '',
  //   image: ''
  // });

  // const handleFormFieldChange = (fieldName, e) => {
  //   setForm({ ...form, [fieldName]: e.target.value })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   checkIfImage(form.image, async (exists) => {
  //     if(exists) {
  //       setIsLoading(true)
  //       await createCampaign({ ...form, target: ethers.utils.parseUnits(form.minCapital, 18)})
  //       setIsLoading(false);
  //       navigate('/');
  //     } else {
  //       alert('Provide valid image URL')
  //       setForm({ ...form, image: '' });
  //     }
  //   })
  // }

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  // authentication
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const address = useAddress();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  
  useEffect(() => {
    setIsWalletConnected(Boolean(address));
  }, [address]);


  useEffect(() => {
    if (!address) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [isWalletConnected]);


  // useEffect(() => {
  //   if (!address) {
  //     setTimeout(() => {
  //       window.location.href = '/';
  //     }, 1000);
  //   } else if (contract) {
  //     fetchCampaigns();
  //   }
  // }, [address, contract]);

  

  // if (!isWalletConnected) {
  //   navigate("/transactions");
  
  // }

  return (

    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">

    

      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

      <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 ">
        {isLoading && <Loader />}
        <div className="flex flex-col justify-center items-center pb-[50px] sm:min-w-[380px] bg-[#1c1c24] rounded-[10px] gap-5">
          <h1 className="font-epilogue font-bold sm:text-[18px] text-[18px] leading-[38px] text-white bg-[#3a3a43] px-6 py-3 rounded-lg ">Contact Portal</h1>
          <h1 className=" font-semibold sm:text-[14px] text-[15px] text-center pt-3 text-white bg-[#1c1c24]">Contact EOSI Finance using any of the below medium. Responses are fast</h1>
        </div>

        <div className='flex flex-col items-center justify-center font-bold text-5xl py-[83px] mb-12 gap-16 text-zinc-400 bg-clip-content p-6 rounded-lg border border-zinc-700  shadow-md shadow-zinc-700'>
          <div className='' >
            Email: <span onClick={() => handleLinkClick('mailto:support@eosifinance.com')} className='cursor-pointer text-purple-700 hover:text-blue-700' >Support@eosifinance.com</span> 
          </div>

          <div >
            Telegram: <span  onClick={() => handleLinkClick('https://t.me/eosifinance')} className='underline cursor-pointer text-purple-700 hover:text-blue-700'>Click to Telegram</span>  
          </div>
        </div>

        
      </div>
      </div>

    </div>
  )
}

export default Contact