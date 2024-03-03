import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Dashboard, Transactions, CopyTrade, ProfileDetails, Contact, Front, Dashboardd, Home2, } from './pages';

const App = () => {
  return (

    <>

      {/* <Home2 /> */}

      <div className="">


        <div>
          {/* <Sidebar /> */}
        </div>

        <div >
          {/* <Navbar /> */}

          <Routes>

            <Route path="/app" element={<Front />} />
            {/* <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transactions" element={<Transactions />} /> */}
            {/* <Route path="/copytrade" element={<CopyTrade />} /> */}

            {/* <Route path="/create-campaign" element={<CreateCampaign />} />
                    
                    <Route path="/campaign-details/:id" element={<CampaignDetails />} /> */}

            <Route path="/profile-details/:id" element={<ProfileDetails />} />

            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Front />
          {/* <Dashboardd /> */}
          {/* <Contact />
                 <Dashboard />
                 <Transactions /> */}
        </div>
      </div>

    </>



  )
}

export default App