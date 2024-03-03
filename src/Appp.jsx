import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, CopyTrade, ProfileDetails, Contact, Home2, } from './pages';

const App = () => {
  return (

    <>

      {/* <Home2 /> */}

        <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">

        
            <div className="sm:flex hidden mr-10 relative">
                <Sidebar />
            </div>

            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                 <Navbar />

                <Routes>
                    {/* <Route path="/home2" element={<Home2 />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* <Route path="/copytrade" element={<CopyTrade />} /> */}
                    
                    <Route path="/create-campaign" element={<CreateCampaign />} />
                    
                    <Route path="/campaign-details/:id" element={<CampaignDetails />} />

                    <Route path="/profile-details/:id" element={<ProfileDetails />} />

                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    
    </>


    
  )
}

export default App