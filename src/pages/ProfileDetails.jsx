import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader, Navbar, Sidebar } from '../components';

import { thirdweb } from '../assets';

const ProfileDetails = () => {
  const { contract } = useContract('0x494437CAdC4323C40d9A194F09fe6d25A050B3e1');

  const { state } = useLocation();
  const navigate = useNavigate();
  const address = useAddress();

  const getDonations = async (pId) => {
    const donations = await contract.call('getDonators', pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString())
      })
    }

    return parsedDonations;
  }

  const [isLoading, setIsLoading] = useState(false);
  const [donators, setDonators] = useState([]);


  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    const userDonations = data.filter((item) => item.donator === address);
    setDonators(userDonations);
  };


  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address])

  useEffect(() => {
    if (!address) {
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } else if (contract) {
      fetchDonators();
    }
  }, [address, contract]);

  // for handling back buttons navigation to previous page
  const clickHandler = () => {
    navigate('/transactions', { replace: true });
  }


  return (

    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">

      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <div>

          {isLoading && <Loader />}

          <button className=' !bg-zinc-700 w-[150px] h-10 flex justify-center items-center rounded-lg text-xs text-zinc-300 shadow-lg shadow-neutral-800 italic cursor-pointer ' onClick={clickHandler}>Back to Transactions
          </button>

          <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">


            <div className="flex-1 flex-col">
              <img src={state.image} alt="campaign" className="w-[120px] h-[120px] object-cover rounded-full" />

            </div>


            <div className="flex flex-col sm:flex-row sm:w-[880px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer items-center justify-center py-3 px-6 shadow-lg shadow-neutral-800 text-zinc-300 font-semibold" >Contract Transactions


              <div className="flex flex-col items-center justify-center sm:flex-row p-2 space-x-16 ">

              </div>


            </div>

          </div>

          <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
            <div className="flex-[2] flex flex-col gap-[40px]">
              <div>



              </div>


              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-white ">List of Transactions</h4>

                <div className="mt-[20px] flex flex-col gap-4">
                  {donators.length > 0 ? donators.map((item, index) => (
                    <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                      <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                      <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">{item.donation}</p>
                    </div>
                  )) : (
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">Here are your Transactions</p>
                  )}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails