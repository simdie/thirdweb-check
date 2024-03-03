import React from 'react';
import { createRoot, ReactDOM, } from "react-dom/client";
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Front from './pages/Front';
// import Dashboardd from "./pages/Dashboardd";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import ProfileDetails from "./pages/ProfileDetails";
import CampaignDetails from "./pages/CampaignDetails";
import { StateContextProvider } from './context';
import App from './App';
import { Sidebar, Navbar } from './components';
import './index.css';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";
const clientId = "7936295e7f66a30f2094613d31b79719";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(

  <ThirdwebProvider
    activeChain={activeChain}
    clientId={clientId}
  >
    <BrowserRouter>


      <Routes>
        <Route index element={<App />} />
        <Route path="app" element={<Front />} />
        {/* <Route path="dashboardd" element={<Dashboardd />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Transactions" element={<Transactions />} />
        <Route path="profile-details/:id" element={<ProfileDetails />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        {/* <StateContextProvider> */}

        {/* </StateContextProvider> */}

      </Routes>
    </BrowserRouter>
  </ThirdwebProvider>


)