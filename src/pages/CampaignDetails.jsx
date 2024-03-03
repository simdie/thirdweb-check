import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader, Navbar, Sidebar } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

const CampaignDetails = () => {
  const { contract } = useContract('0x494437CAdC4323C40d9A194F09fe6d25A050B3e1');

  const { state } = useLocation();
  const navigate = useNavigate();
  const address = useAddress();

  const donate = async (pId, amount) => {
    const data = await contract.call('donateToCampaign', pId, { value: ethers.utils.parseEther(amount) });

    return data;
  }


  // get all campaign donations

  const getDonations = async (pId) => {
    const donations = await contract.call('getDonators', pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString())
      })
    }

    return parsedDonations;
  }



  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.commission);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    const userDonations = data.filter((item) => item.donator === address);
    setDonators(userDonations);
  };


  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address])

  useEffect(() => {
    if (!address) {
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } else if (contract) {
      fetchDonators();
    }
  }, [address, contract]);





  const handleDonate = async (e) => {

    e.preventDefault();
    if (!amount || amount <= 0) {
      alert('Please put in deposit amount');
      return;
    }

    try {
      setIsLoading(true);
      await donate(state.pId, amount);
      navigate('/transactions')
    } catch (error) {
      setIsLoading(false);
      console.log(error); // handle the error
    }
  }


  return (

    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">



      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>


      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <div>
          {isLoading && <Loader />}

          <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
            <div className="flex-1 flex-col">
              <img src={state.image} alt="campaign" className="w-[120px] h-[120px] object-cover rounded-full" />
              {/* <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div className="absolute h-full bg-[#4acd8d]" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}>
            </div>
          </div> */}
            </div>

            {/* <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div> */}



            <div className="flex flex-col sm:flex-row sm:w-[860px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer items-center justify-center py-3 px-6 shadow-lg shadow-neutral-800 " >



              <div className="flex flex-col items-center justify-center sm:flex-row p-2 space-x-16 ">


                <div className=" flex flex-col gap-2 items-center w-[150px] h-[60px] ">
                  <h3 className="font-epilogu text-left leading-[26px] w-3/5  text-purple-700 font-semibold text-xs ">Trader Name</h3>
                  <h3 className="font-epilogue font-semibold  text-white text-left leading-[26px] w-3/5  ">{state.traderName}</h3>
                </div>

                <div className=" flex flex-col gap-2 items-center w-[150px] h-[60px] ">
                  <h3 className="font-epilogu text-left leading-[26px] w-3/5  text-purple-700 font-semibold text-xs ">min.Profit %</h3>
                  <h3 className="font-epilogue font-semibold  text-white text-left leading-[26px] w-3/5  ">{state.minProfit}</h3>
                </div>

                <div className=" flex flex-col gap-2 items-center w-[150px] h-[60px] ">
                  <h3 className="font-epilogu text-left leading-[26px] w-3/5  text-purple-700 font-semibold text-xs ">min.Capital USD</h3>
                  <h3 className="font-epilogue font-semibold  text-white text-left leading-[26px] w-3/5  ">{state.minCapital}</h3>
                </div>

                <div className=" flex flex-col gap-2 items-center w-[150px] h-[60px]  ">
                  <h3 className="font-epilogu text-left leading-[26px] w-3/5  text-purple-700 font-semibold text-xs ">Commission %</h3>
                  <h3 className="font-epilogue font-semibold  text-white text-left leading-[26px] w-3/5  ">{state.commission}</h3>
                </div>


              </div>


            </div>



          </div>

          <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
            <div className="flex-[2] flex flex-col gap-[40px]">
              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Pro-Trader</h4>

                <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-yellow-600 flex justify-center items-center cursor-pointer">
                    <p className='text-sm font-bold text-purple-900'>EOSI</p>
                  </div>
                  <div>
                    <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">{state.traderName}</h4>
                    <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">30 Previous Contracts</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-white ">Traders Contract Page</h4>

                <div className="mt-[20px]">
                  <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{state.description}</p>
                </div>
              </div>

              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-white ">Executed Contracts</h4>

                <div className="mt-[20px] flex flex-col gap-4">
                  {donators.length > 0 ? donators.map((item, index) => (
                    <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                      <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                      <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">{item.donation}</p>
                    </div>
                  )) : (
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1 ">
              <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Execute this Contract</h4>

              <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px] ">
                <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
                  Copytrade this ProTrader
                </p>
                <div className="mt-[30px]">
                  <input
                    type="number"
                    placeholder="USD 500.00"
                    step="0.01"
                    className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                    <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">Complete this contract to start earning Monthly Returns</h4>
                    <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">You make whatever gains % Per month this Trader stated on the Copytrade Page</p>
                  </div>

                  <CustomButton
                    btnType="button"
                    title="Deposit to Contract"
                    styles="w-full !bg-purple-800"
                    // disabled={parseInt(amount) < 500}
                    handleClick={handleDonate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails