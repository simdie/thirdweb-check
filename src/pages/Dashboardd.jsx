import { useEffect, useState } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

const Dashboardd = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsWalletConnected(Boolean(address));
  }, [address]);

  useEffect(() => {
    if (isWalletConnected) {
      setIsLoading(true);
      // You may replace the setTimeout delay time (in milliseconds) with a value that suits your need
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isWalletConnected]);

  if (isLoading) {
    return (
      <div className="h-screen w-60 bg-yellow-400 flex items-center justify-center ml-56">
        LOADING....
      </div>
    );
  }

  if (!isWalletConnected) {
    navigate("/app");
    return null;
  }


  return (
          <div className='bg-red-400 h-screen flex flex-col items-center justify-center text-md font-bold'>YOUR CURRENT BALANCE IS $340,000 USD
    
    <br />
    <ConnectWallet />
    
    </div>
      );
};

export default Dashboardd;
