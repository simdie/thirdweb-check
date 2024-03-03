import React from 'react';

import { tagType, thirdweb } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({ owner, traderName, minProfit, minCapital, commission, amountCollected, image, handleClick }) => {
  // const remainingDays = daysLeft(commission);
  
  return (
    <div className="flex flex-col sm:flex-row sm:w-[990px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer items-center py-4 px-10 space-x-12 shadow-xl shadow-neutral-800" onClick={handleClick}>

          <div className=" rounded-full flex justify-center items-center bg-[#13131a]">
            

            <div className=" rounded-full bg-green-800 flex justify-center items-center cursor-pointer px-3 py-1">
              <p className='text-xs font-semibold !text-gray-300'>Active</p>
            </div>

          </div>

      <img src={image} alt="fund" className="w-[70px] h-[70px] rounded-full object-cover"/>

      <div className="flex flex-col items-center justify-center sm:flex-row p-2 space-x-10 ">
        

        <div className=" flex flex-row items-center w-[280px]">
          <h3 className="font-epilogue font-semibold  text-white text-left leading-[26px] w-3/5  ">{traderName}</h3>
          <h3 className=" font-epilogue font-semibold  text-white text-center leading-[26px] w-2/5 ">{minProfit}</h3>
        </div>

        <div className="flex justify-center items-center flex-wrap  gap-16 w-[180px] ">
          <div className="flex flex-row items-center gap-16">
            
            <h4 className="font-epilogue font-semibold  text-white leading-[16px]"> {minCapital}</h4>
            
            <p className=" font-epilogue font-semibold  text-center leading-[16px] text-white sm:max-w-[120px] truncate">  {commission}</p>
          </div>
          
        </div>

        
      </div>

      <button className='bg-black text-white text-xs border-2 border-purple-600 rounded-full px-6 py-3 shadow-2xl shadow-zinc-700'>Copy Trade</button>
    </div>
  )
}

export default FundCard