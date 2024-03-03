import { Link } from 'react-router-dom';
import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";

function HeroBody() {

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };


  return (
    <div className=" bg-[#F5F7FF] flex flex-col justify-start mx-5 max-w-6xl sm:mx-auto my-12 sm:my-36">
      <div className="flex items-center justify-center w-full sm:w-3/4">
        <h5 className='space-x-3'>
          <span className="text-4xl sm:text-6xl text-amber-500 tracking-wide leading-tight">
            Automate 
          </span>

          <span className="text-4xl sm:text-6xl text-black tracking-wide leading-tight">
            your crypto trading and investing with the best AI powered technologies
          </span>
        </h5>
      </div>

      <div className="text-left text-xl sm:text-2xl py-10">
        Unleash the Power of Crypto Trading with EOSI Finance. Copy Top Pro-Traders with Ease in just a few clicks
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-8">
        <button className=" hidden md:block font-base bg-[#4C205B] py-5 px-16 rounded-lg text-gray-100 hover:translate-x-0.5 duration-700 mb-6 sm:mb-0">
          Try it for free
        </button>

    

        <div className=" text-gray-100 block md:hidden mb-6">
          <ConnectWallet className="rounded-xl bg-[#4C205B] text-sm py-5" />
        </div>

        
          <button onClick={() => handleLinkClick('https://eosi-finance.gitbook.io/eosi-finance-litepaper/')} className="font-base bg-slate-300 py-5 px-16 rounded-lg text-amber-600 hover:translate-x-0.5 duration-700 hover:bg-gray-800 hover:text-white mb-6 sm:mb-0">
            Read the Litepaper
          </button>

      </div>
    </div>
  );
}

export default HeroBody;
