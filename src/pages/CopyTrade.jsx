import React, { useState, useEffect } from 'react'
import {TiArrowSortedUp} from "react-icons/ti"

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const CopyTrade = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (

    <>

        

        <h1 className='text-gray-500 font-semibold pb-5 '>EOSI Finance Traders</h1>
        <div className='flex flex-row sm:w-[990px] w-full rounded-t-lg items-center py-4 px-10 space-x-14 bg-[#1c1c24] text-purple-700 font-semibold text-xs'>
        
          <div className='flex flex-row items-center space-x-2 '>
            <h1>Status</h1>
            <TiArrowSortedUp className='text-base pt-1' />
          </div>

          <div className='flex flex-row items-center space-x-2 '>
            <h1>Trader</h1>
            <TiArrowSortedUp className='text-base pt-1' />
          </div>

          <div className='flex flex-row items-center space-x-2 '>
            <h1>Name</h1>
            <TiArrowSortedUp className='text-base pt-1' />
          </div>

          <h1 className='pl-20'>min.Profit %</h1>
          <h1>min.Capital USD</h1>

          <div className='flex flex-row items-center space-x-2 '>
            <h1>Commission %</h1>
            <TiArrowSortedUp className='text-base pt-1' />
          </div>

        </div>
     
      <DisplayCampaigns 
      // title="Eosi Protraders"
      isLoading={isLoading}
      campaigns={campaigns}
       />
    </>
    
  )
}

export default CopyTrade