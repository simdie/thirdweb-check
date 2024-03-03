import React from 'react'
import secure from "../images/secure.png"
import cloudbased from "../images/cloudbased.png"
import encrypted from "../images/encrypted.png"

export default function FundsProperties() {
    return (

        <div className=" bg-white flex flex-col  items-center    my-8 pt-24 w-full">

            <div className="font-semibold text-2xl sm:text-4xl pb-20">
                Your funds and properties are safe.

            </div>


            <div className="flex  flex-col lg:flex-row  lg:items-center   pb-20">

                <div className="flex flex-col items-center   space-y-5    w-full ">


                    <div className="h-full pt-4"><img src={secure} alt="" /></div>
                    <div className="flex flex-col items-center justify-center h-40">
                        <p className="font-bold text-lg">Secure</p>
                        <p className="text-center px-12">Your funds lie safely on-chain for maximum interoperability. EOSI Finance will never touch them directly or indirectly. </p>
                    </div>
                </div>





                <div className="flex flex-col items-center   space-y-5   w-full ">

                    <div className="h-full pt-4"><img src={cloudbased} alt="" /></div>
                    <div className="flex flex-col items-center justify-center h-40">
                        <p className="font-bold text-lg">Cloud-Based</p>
                        <p className="text-center px-12">Our AI powered algorithms and smart contracts run reliably 24/7 and never miss a trade once placed by our pro-traders. EOSI Finance eliminates the need to trade by yourself whether you are an experienced trader or not.</p>
                    </div>
                </div>





                <div className="flex flex-col items-center  space-y-5  w-full">

                    <div className="h-full pt-4"><img src={encrypted} alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center h-40">
                        <p className="font-bold text-lg">Encrypted</p>
                        <p className="text-center px-12">All the trades on our platform are encrypted as they are on-chain and interacts with a public-private smart contract. So no possibility of any bot frontrunning any of our trades.</p>
                    </div>
                </div>


            </div>







            {/* division div */}

            {/* <div className="my-12"></div> */}



        </div>
    )
}
