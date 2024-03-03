import React from "react";
import funder1 from "../images/funder1.png"
import funder2 from "../images/funder2.png"
import funder3 from "../images/funder3.png"
import funder4 from "../images/funder4.png"
import funder5 from "../images/funder5.png"
import funder6 from "../images/funder6.png"

export default function EosiTeamsection11() {
    return (
        <div className=" bg-[#F5F7FF] flex flex-col w-full justify-between items-center pb-24 md:px-28 px-4">




            <h1 className="text-3xl text-zinc-500 sm:text-6xl  tracking-wide leading-7 pb-12 ">EOSI FINANCE TEAM</h1>

            <div className='flex flex-col'>

                <p className='text-2xl font-semibold text-gray-700 leading-8 pb-8 text-center'>EOSI Finance was founded by experienced quant traders, programmers, mathematicians and DeFi lovers with years of expereince in decentralised finance, forex, equity, stocks, binary options and the business fields as well. </p>

                <p className='text-2xl font-semibold text-gray-700 leading-8 text-center' > At EOSI Finance, we vouch for honesty, reliability, commitment, flexibility, innovation, diversity and leadership.</p>

            </div>

            <div className='flex flex-row items-center justify-center  w-10/12 py-12 space-x-2'>

                <div className='flex flex-col items-center justify-center w-4/12'>
                    <img src={funder1} alt="Founder1" />
                    <p className='text-lg font-semibold pt-3'>Alexvy</p>
                    <p className="text-center">COO Co-Founder</p>
                </div>

                <div className='flex flex-col items-center justify-center w-4/12'>
                    <img src={funder2} alt="" />
                    <p className='text-lg font-semibold pt-3'>Hamann</p>
                    <p className="text-center">CTO/Co-Founder</p>
                </div>

                <div className='flex flex-col items-center justify-center w-4/12'>
                    <img src={funder3} alt="" />
                    <p className='text-lg font-semibold pt-3'>Olick</p>
                    <p className="text-center">Quant Trader</p>
                </div>
            </div>


            <div className='flex flex-row items-center justify-center w-10/12 py-6 '>

                <div className='flex flex-col items-center justify-center w-4/12'>
                    <img src={funder4} alt="" />
                    <p className='text-lg font-semibold pt-3'>Web3easter</p>
                    <p className="text-center">Smart Contract Developer</p>
                </div>

                <div className='flex flex-col items-center justify-center w-4/12'>

                    <img src={funder5} alt="" />
                    <p className='text-lg font-semibold pt-3'>Veronika</p>
                    <p className="text-center">Representatives Co-ordinator</p>
                </div>

                <div className='flex flex-col items-center justify-center w-4/12'>
                    {/* <img src="funder6.png" alt="" /> */}
                    <img src={funder6} alt="" />
                    <p className='text-lg font-semibold pt-3'>Tevis</p>
                    <p className="text-center">Full-Stack Web Developer</p>
                </div>
            </div>


        </div>
    )
}
