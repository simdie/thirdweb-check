import React from "react"
import testtimonialimage1 from "../images/testimonia-image1.png"
import testtimonialimage2 from "../images/testimonia-image2.png"

export default function Testimonial() {
  return (

    
    <div className="bg-[#F5F7FF] flex flex-col md:flex-row md:space-x-12 md:space-y-0 space-y-5 mx-4 md:mx-16 md:my-20 mb-20">


        <div className="md:w-6/12  rounded-lg border  shadow-lg p-12 shadow-slate-400 md:h-96 bg-white hover:translate-x-2 duration-700">

            <p className="text-lg leading-8 italic ">
            &quot;The thriving open source software, AI, machine learning, blockchain decentralization, and research ecosystem are driving more investment in web3 innovation. TrustFunded acknowledges and commends the innovative efforts of EOSI Finance in advancing Prop Firm businesses in the web3 space.&quot;
            </p>
            <div className=" pt-14 flex flex-row items-start space-x-3">
                <img src={testtimonialimage1} alt="" />

                <div className="space-y-1">
                    <p className="text-lg font-semibold ">Aria Amandaz</p>
                    <p className="text-lg text-slate-500">CEO TrustFunded</p>
                </div>
                
            </div>
        </div>



        <div className="md:w-6/12  rounded-lg border  shadow-lg p-12 shadow-slate-400 md:h-96 bg-white hover:translate-x-2 duration-700">
            <p className="text-lg leading-8 italic ">
            &quot;This is a significant achievement! By prioritizing excellent products and artificial intelligence, they have established a winning strategy for product advancement in the realm of Web3 prop firm business.&quot;
            </p>
            <div className=" pt-20 flex flex-row items-start space-x-3">
                <img src={testtimonialimage2} alt="" />

                <div className="space-y-1">
                    <p className="text-lg font-semibold ">Cheng Darryl</p>
                    <p className="text-lg text-slate-500">Co-Founder Sanest MoneyFX</p>
                </div>
                
            </div>
        </div>

        

        

    </div>
  )
}
