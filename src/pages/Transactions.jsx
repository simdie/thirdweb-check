import React, { useState, useEffect, useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

import { DisplayProfile, Navbar, Sidebar } from '../components';
import { useStateContext } from '../context'

const Transactions = () => {
  const { contract } = useContract('0x494437CAdC4323C40d9A194F09fe6d25A050B3e1');

  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const address = useAddress();



  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns');

    const parsedCampaings = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      traderName: campaign.traderName,
      minProfit: campaign.minProfit,
      minCapital: campaign.minCapital.toNumber(),
      commission: campaign.commission.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i
    }));

    return parsedCampaings;
  }

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [contract]);




  useEffect(() => {
    if (!address) {
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } else if (contract) {
      fetchCampaigns();
    }
  }, [address, contract]);

  return (


    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">

      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <div>

          <div className='!text-yellow-500 flex flex-col items-start justify-between w-[980px] font-semibold text-sm pb-2'>
            <p>Here are all Transactions with each Pro-trader</p>
            <p className=''>Click on each Pro-trader to view all Copy-trade Contract Transactions with the Pro-Trader</p>

          </div>


          <DisplayProfile
            // title="Eosi Protraders"
            isLoading={isLoading}
            campaigns={campaigns}

          />
        </div>
      </div>
    </div>

  )
}

export default Transactions