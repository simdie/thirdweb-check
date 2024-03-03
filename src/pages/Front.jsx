import React, { useEffect, useState } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { Loader, Loading2 } from '../components';
import { AiOutlineHome } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';

import {
  Header,

  HeroBody,
  TraderStat,
  GetStarted,
  FundsProperties,
  EosiSection7,
  EosiSection8,
  Testimonial,
  EosiSection9,
  FinanceNumbers,
  BannerSection10,
  EosiTeamsection11,
  Footer
} from '../frontend';

const Front = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsWalletConnected(!!address);
    if (isWalletConnected) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [address, isWalletConnected, navigate]);

  if (isLoading) {
    return (
      <div>
        <Loading2 />
      </div>
    );
  }

  if (isWalletConnected) {
    return null;
  }

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#F5F7FF]">







      <Header />
      <HeroBody />
      <TraderStat />
      <GetStarted />
      <FundsProperties />
      <EosiSection7 />
      <FinanceNumbers />
      <EosiSection8 />
      <Testimonial />
      <EosiSection9 />




      <div id="roadmap-section">
        <BannerSection10 />
      </div>

      <div id="team-section" >
        <EosiTeamsection11 />
      </div>


      <div id="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Front;

