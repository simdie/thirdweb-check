import React from "react"
import greendiv from "../images/green-div.png"
import section8image1 from "../images/section8-image1.png"
import video1 from "../images/video1.png"
import section8image2 from "../images/section8-image2.png"
import section8image3 from "../images/section8-image3.png"

export default function EosiSection8() {
    return (
        <div className=" bg-[#F5F7FF] flex flex-col md:flex-row sm:space-x-6  justify-start items-center mx-4 max-w-7xl  sm:mx-auto  ">


            <div className=" flex flex-col md:items-start items-center w-full">

                <p className="font-semibold text-3xl py-8">We value our <span className="text-green-800 ">Pro-Traders</span> </p>

                <p className="leading-6 text-gray-700 text-lg pb-20 md:pr-24">Carving trading experience constantly is our top priority. Shorter is driven under the ethos of downright on-chain and open-source, bringing traders one step further towards our valuation of erecting a transparent, reliable, community-owned TradFi ecosystem. If you are a trader, and you want to feel the power of a Crypto Prop Firm, then EOSI Finance is the right place to kickstart your funded crypto account journey.</p>

                <div className="flex flex-row justify-start w-full pb-8">
                    <img src={greendiv} alt="" />
                    <p className="text-xl font-semibold px-6 ">How Shorter guard your equity?</p>
                </div>

                <div className="flex  justify-start ">
                    <img className="rounded-lg" src={video1} alt="" />
                </div>

            </div>




            <div className="flex flex-col  w-full space-y-4 pt-32">


                <div className="md:pl-28">
                    <div className="border-2 rounded-lg border-yellow-400 px-6 py-6">

                        <img className="py-3" src={section8image1} alt="" />
                        <p className="text-lg font-semibold py-3">100% Decentralized</p>
                        <p className="leading-6 md:pr-40 py-1">Reinvent the modules and evict each ounce of intervention from off-chain programs and services.</p>

                    </div>

                </div>



                <div className="md:pr-24">
                    <div className="border-2 rounded-lg border-yellow-400 px-10 py-6">

                        <img className="py-3" src={section8image2} alt="" />
                        <p className="text-lg font-semibold py-3">Diverse Portfolio Selection</p>
                        <p className="leading-6 md:pr-28 py-1">Plenty handy to diversify your crypto portfolio by allowing the EOSI Finance AI to set up your profile to copy trade from various pro-traders same time within the flavored trading cycle.</p>

                    </div>

                </div>


                <div className="md:pl-28  ">
                    <div className="border-2 rounded-lg border-yellow-400 px-6 py-6">

                        <img className="py-3" src={section8image3} alt="" />
                        <p className="text-lg font-semibold py-3">Abundant Market Liquidity</p>
                        <p className="leading-6 md:pr-40 py-1">Maximize the liquidity across corresponding infrastructures collectively to makes trading foolproof and practical.</p>

                    </div>

                </div>


            </div>



            <div className="my-10"></div>

        </div>
    )
}
