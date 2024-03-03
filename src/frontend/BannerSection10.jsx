import React from "react"
import banner1 from "../images/banner1.png"
import innerBanner2 from "../images/inner-banner2.png"
import eosiBanner from "../images/eosi-roadmap.png"

export default function BannerSection10() {
  return (
    <div className="  flex flex-col w-full justify-between bg-[#F5F7FF] items-center ">

        <div className=" flex flex-row items-center justify-center w-full  bg-yellow-400">
            <img className="relative w-full" src={banner1} alt="" />
            <img className="absolute" src={innerBanner2} alt="" />

        </div>

        <div className="flex items-center justify-center w-full py-32">
            <img src={eosiBanner} alt="" />
        </div>
    </div>
  )
}
