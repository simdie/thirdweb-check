import React from "react";
import getstarted1 from '../images/getstarted1.png'
import getstarted2 from "../images/getstarted2.png"
import getstarted3 from "../images/getstarted3.png"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";


export default function GetStarted() {
  return (
    <div className=" bg-[#F5F7FF] flex flex-col  items-center  mx-4    my-16 ">

        <div className="font-semibold text-3xl sm:text-4xl pb-20">
            Get Started in 3 Easy Steps

        </div>


        <div className="flex  flex-col lg:flex-row  lg:items-center   pb-20">

            <div className="flex flex-col items-center   space-y-5    w-full ">
                
                
                <div className="h-full pt-4"><img src={getstarted1} alt="" /></div>
                <div className="flex flex-col items-center justify-center h-40">
                    <p className="font-bold text-lg">1. Identify your goal</p>
                    <p className="text-center px-12">We have different categories of pro-traders to suit your needs. </p>
                </div>
            </div>

            

            

            <div className="flex flex-col items-center   space-y-5   w-full ">
                
                <div className="h-full pt-4"><img src={getstarted2} alt="" /></div>
                    <div className="flex flex-col items-center justify-center h-40">
                        <p className="font-bold text-lg">2. Trade with your Web3 Wallet</p>
                        <p className="text-center px-12">Connect your existing web3 wallets like Metamask, Trustwallet, SafePal etc and approve the amount you want to trade with.</p>
                    </div>
            </div>

            

           

            <div className="flex flex-col items-center  space-y-5  w-full">
                
                <div className="h-full pt-4"><img src={getstarted3} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center h-40">
                        <p className="font-bold text-lg">3. Start investing Today</p>
                        <p className="text-center px-12">Choose from a wide seletion of our doxxed pro-traders or allow EOSI Finance AI to select pro-traders according to your risk level.</p>
                </div>
            </div>
            

        </div>

    
        <button  className=" font-base bg-[#4C205B] py-5 px-16 rounded-lg text-gray-100 hover:translate-x-0.5 duration-700">Get Started</button>
        
        


        {/* division div */}

        <div className="my-6"></div>
     
        
        
    </div>
  )
}
