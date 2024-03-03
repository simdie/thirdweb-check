import React from 'react'
import {TbChartCandle} from 'react-icons/tb';
import {FaArrowUp} from 'react-icons/fa';

import dex1 from "../images/dex1.png"
import dex2 from "../images/dex2.png"
import dex3 from "../images/dex3.png"
import dex4 from "../images/dex4.png"
import dex5 from "../images/dex5.png"
import usdtlogo from "../images/usdt-logo.png"


export default function TraderStat() {
  return (
    <div className="bg-[#F5F7FF] flex flex-col lg:flex-row    items-center mx-4 sm:mx-8 lg:space-x-8 ">

        <div className=" flex flex-row content-start  justify-between pt-7 w-full mb-8 px-6  sm:mb-5   rounded-lg h-60 bg-gray-100  shadow-inner drop-shadow-xl ">
            


            <div className="space-y-5">
                <p className="">NightRaiderPRO TRADER</p>
                <p className="font-semibold text-sm">DEX Platforms</p>
                <div className='flex flex-row space-x-2'>
                    <img src={dex1} alt="" />
                    <img src={dex2} alt="" />
                    <img src={dex3} alt="" />
                    <img src={dex4} alt="" />
                    <img src={dex5} alt="" />
                </div>
                
                <p className="text-sm">Last month profit</p>
                <div className="flex space-x-2">
                    <FaArrowUp className="text-green-500" />
                    <p className="text-sm">123.24%</p>
                </div>
               
            </div>
            


            <div className="flex flex-col space-y-5 ">
                <div className="flex flex-row justify-end space-x-2">
                    <img src={usdtlogo} alt="" />
                    <p className="text-sm">USDT</p>
                </div>
               

                <div className="flex justify-end items-center space-x-2">
                    <TbChartCandle />
                    <p className="text-sm">30 days</p>
                </div>
               

                <div className="pt-16">
                    <button className="bg-pink-200 px-5 py-2 border rounded-lg text-sm text-green-600 hover:translate-x-0.5 duration-700">Connect to copy trade</button>
                </div>
            </div>
            



        </div>






        <div className=" flex flex-row content-start  justify-between pt-7 w-full mb-8 px-6 sm:mb-5   rounded-lg h-60 bg-gray-100  shadow-inner drop-shadow-xl ">
            
            <div className="space-y-5">
                <p className="">WavePRO TRADER</p>
                <p className="font-semibold text-sm">DEX Platforms</p>
                <div className='flex flex-row space-x-2'>
                    <img src={dex1} alt="" />
                    <img src={dex2} alt="" />
                    <img src={dex3} alt="" />
                    <img src={dex4} alt="" />
                    <img src={dex5} alt="" />
                </div>
                
                <p className="text-sm">Last month profit</p>
                <div className="flex space-x-2">
                    <FaArrowUp className="text-green-500" />
                    <p className="text-sm">48.87%</p>
                </div>
               
            </div>
            


            <div className="flex flex-col space-y-5 ">
                <div className="flex flex-row justify-end space-x-2">
                    <img src={usdtlogo} alt="" />
                    <p className="text-sm">USDT</p>
                </div>
               

                <div className="flex justify-end items-center space-x-2">
                    <TbChartCandle />
                    <p className="text-sm">35 days</p>
                </div>
               

                <div className="pt-16">
                    <button className="bg-pink-200 px-5 py-2 border rounded-lg text-sm text-green-600 hover:translate-x-0.5 duration-700">Connect to copy trade</button>
                </div>
            </div>
            



        </div>




        <div className=" flex flex-row content-start  justify-between pt-7 w-full mb-8 px-6 sm:mb-5   rounded-lg h-60 bg-gray-100  shadow-inner drop-shadow-xl ">
            <div className="space-y-5">
                <p className="">danku_zone PRO TRADER</p>
                <p className="font-semibold text-sm">DEX Platforms</p>
                <div className='flex flex-row space-x-2'>
                    <img src={dex1} alt="" />
                    <img src={dex2} alt="" />
                    <img src={dex3} alt="" />
                    <img src={dex4} alt="" />
                    <img src={dex5} alt="" />
                </div>
                
                <p className="text-sm">Last month profit</p>
                <div className="flex space-x-2">
                    <FaArrowUp className="text-green-500" />
                    <p className="text-sm">85.03%</p>
                </div>
               
            </div>
            


            <div className="flex flex-col space-y-5 ">
                <div className="flex flex-row justify-end space-x-2">
                    <img src={usdtlogo} alt="" />
                    <p className="text-sm">USDT</p>
                </div>
               

                <div className="flex justify-end items-center space-x-2">
                    <TbChartCandle />
                    <p className="text-sm">27 days</p>
                </div>
               

                <div className="pt-16">
                    <button className="bg-pink-200 px-5 py-2 border rounded-lg text-sm text-green-600 hover:translate-x-0.5 duration-700">Connect to copy trade</button>
                </div>
            </div>
            



        </div>

    </div>
  )
}
