import React from "react"
import section7Left from "../images/section7-left.png"
import section7Right from "../images/section7-right.png"

export default function EosiSection7() {
    return (
        <div className="flex  flex-col md:flex-row  items-center justify-between   bg-[#F5F7FF] mx-4 md:mx-24 py-16">
            <div className="  w-full h-full space-y-8  pb-12">

                <p className="font-semibold text-2xl sm:text-3xl">
                    Becoming an <span className=" text-[#4C205B] underline decoration-amber-500 underline-offset-4 decoration-wavy ">EOSI Finance</span>    user & Grab passive income
                </p>

                <img src={section7Left} alt="" />

                <p className="leading-6">
                    If you are looking for a simple, secure  and decentralized way to grow your crypto portfolio, EOSI Finance is definitely worth checking out.

                </p>

                <p className="leading-7">
                    EOSI Finance provides a simple and straightforward way to take advantage of the growing popularity of DEX protocols. It provides a way for individuals like you to get involved in the world of cryptocurrency, even if you are new to the space. It gives you that power and allows you to copy the trades of professional crypto traders. You can benefit from their expertise and experience, without having to spend the time and effort required to understand the complexities of the crypto market or trading.
                </p>

                <p>

                    EOSI Finance provides an attractive solution for anyone looking to grow their crypto assets with ease.

                </p>

            </div>

            <div className="flex justify-end w-full h-full">

                <img className="hue-rotate-15 " src={section7Right} alt="" />

            </div>

        </div>
    )
}
