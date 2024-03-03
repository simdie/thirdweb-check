import React from "react"
import divide from "../images/divide.png"

export default function FinanceNumbers() {
    return (
        <div className="justify-center flex flex-col w-full items-center py-24 bg-black sm:mx-auto">

            <div className="flex items-center justify-center w-full">
                <p className="font-semibold text-3xl text-indigo-400">EOSI Finance in numbers</p>
            </div>

            <div className="flex flex-col  lg:flex-row md:space-x-10 w-5/6 max-w-6xl mx-auto">

                <div className="flex flex-row items-center mx-6 w-full md:w-1/2 md:space-x-10">

                    <div className="flex flex-row w-full items-center justify-center pt-16">

                        <img src={divide} alt="" />

                        <div className="flex flex-col items-center justify-center pb-2 space-y-4 space-x-4">
                            <p className="text-lg text-gray-200">Active Users</p>
                            <p className="text-3xl sm:text-5xl font-semibold text-indigo-400">$2586</p>
                        </div>

                    </div>

                    <div className="flex flex-row w-full items-center justify-center pt-16">

                        <img src={divide} alt="" />

                        <div className="flex flex-col items-center justify-center pb-2 space-y-4 space-x-4">
                            <p className="text-lg text-gray-200">Active Pro-Traders</p>
                            <p className="text-3xl sm:text-5xl font-semibold text-indigo-400">18</p>
                        </div>

                    </div>

                </div>

                <div className="flex flex-row items-center mx-4 w-full md:w-1/2 md:space-x-10">

                    <div className="flex flex-row w-full items-center justify-center pt-16">

                        <img src={divide} alt="" />

                        <div className="flex flex-col items-center justify-center pb-2 space-y-4 space-x-4">
                            <p className="text-lg text-gray-200">Total Value Traded</p>
                            <p className="text-3xl sm:text-5xl font-semibold text-indigo-400">$2,047,698</p>
                        </div>

                    </div>

                    <div className="flex flex-row w-full items-center justify-center pt-16">

                        <img src={divide} alt="" />

                        <div className="flex flex-col items-center justify-center pb-2 space-y-4 space-x-4">
                            <p className="text-lg text-gray-200">DEX Platforms</p>
                            <p className="text-3xl sm:text-5xl font-semibold text-indigo-400">13</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
