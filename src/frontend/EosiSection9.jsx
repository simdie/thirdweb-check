import React from "react"
import section9Box1 from "../images/section9-box1.png"
import section9Box2 from "../images/section9-box2.png"
import section9Box3 from "../images/section9-box3.png"
import section9Box4 from "../images/section9-box4.png"

export default function EosiSection9() {
  return (
    <div className="  flex flex-col md:flex-row w-full md:justify-between items-center pt-24 pb-40 bg-black  px-4 md:px-20">

      <div className="flex flex-col items-center justify-center w-full  ">
        <h1 className="text-3xl  text-white pb-16 md:pb-24 md:pr-32 text-center md:text-start leading-10">
          EOSI Finance was founded by experienced quant traders, programmers, mathematicians and DeFi lovers
        </h1>

        <div className="block md:hidden  text-white pb-16">

          <div className="flex flex-col space-y-28">
            <div className="text-2xl font-semi-bold text-white">
              <img src={section9Box1} alt="" />
            </div>


          </div>

        </div>

        <p className="text-xl text-white leading-9 md:pr-32 md:pb-0 pb-16 text-center md:text-start  ">
          EOSI Finance equips every crypto lover and DeFi ethuansist with varying and effective arms for maximum profit amidst their crypto trading level with the world best trusted AI technologies.
        </p>

        <div className="block md:hidden  text-white">

          <div className="text-2xl font-semi-bold text-white ">
            <img src={section9Box2} alt="" />
          </div>

        </div>


      </div>


      <div className=" flex flex-col md:flex-row items-center justify-between w-full  md:relative ">

        <div className=" flex-col space-y-28 hidden md:block">
          <div className="text-2xl font-semi-bold text-white">
            <img src={section9Box1} alt="" />
          </div>

          <div className="text-2xl font-semi-bold text-white">
            <img src={section9Box2} alt="" />
          </div>
        </div>

        <div className="hidden md:block  flex-col pt-36 absolute left-80 space-y-20">
          <div className="text-2xl font-semi-bold text-white ">
            <img src={section9Box3} alt="" />
          </div>

          <div className="text-2xl font-semi-bold text-white ">
            <img src={section9Box4} alt="" />
          </div>
        </div>




      </div>




    </div>
  )
}
